import { Injectable } from '@angular/core';
import { LibConfig } from '../../app-config';
import Compressor from 'compressorjs';

import {
  getStorage,
  ref,
  uploadBytes,
  uploadString,
  getDownloadURL,
  deleteObject,
  list,
  ListOptions,
  ListResult,
  StringFormat,
} from 'firebase/storage';
import { CommonFirebaseService } from '../common-firebase';
import {
  ImageFileInfo,
  ImageFileInfoList,
} from '../../components/common-ui/image-browser/image-browser.interface';

@Injectable()
export class ImageFireStoreService {
  public baseStoreUrl: string = '';

  constructor(
    private commonFireSvc: CommonFirebaseService,
    private libConfig: LibConfig
  ) {
    this.baseStoreUrl = this.libConfig.firebaseStoreConfig.baseStoreUrl;
  }

  private buildImageUrl(filePath: string, userId: string = ''): string {
    return (
      this.baseStoreUrl +
      '/' +
      (userId ? `${userId}/${filePath}` : '' + filePath)
    );
  }

  public async validateImage(imageData: any): Promise<string> {
    if (!imageData) return 'Empty Image';

    const { maxKBs } = this.libConfig.firebaseStoreConfig;

    // Type Check
    if (imageData.type.indexOf('image/') < 0) {
      return `Not a valid image file. Please try uploading a valid jpg/gif/png image file.`;
    }

    //Size Check
    if (imageData.size > maxKBs * 1024) {
      return `Image size exceeds the limit of ${maxKBs}KBs`;
    }

    // Dimension Check.
    return await this.validateImageDimension(imageData);
  }

  public async validateImageDimension(imageData: any): Promise<string> {
    const { maxWidth, maxHeight, minWidth, minHeight } =
      this.libConfig.firebaseStoreConfig;

    var reader = new FileReader();

    //Read the contents of Image File.
    reader.readAsDataURL(imageData);

    const promise = new Promise<string>((resolve, reject) => {
      reader.onload = (e) => {
        //Initiate the JavaScript Image object.
        const image = new Image();

        //Set the Base64 string return from FileReader as source.
        image.src = e.target.result as string;
        image.onload = () => {
          // Natural size is the actual image size regardless of rendering.
          // The 'normal' `width`/`height` are for the **rendered** size.
          const width = image.naturalWidth;
          const height = image.naturalHeight;

          if (
            width > maxWidth ||
            minWidth < minWidth ||
            maxHeight > maxHeight ||
            minHeight < minHeight
          ) {
            resolve(
              `Image dimensions are ${width}px X ${height}px and does not meet the requirement. Allowed width = ${minWidth}px to ${maxWidth}px and allowed height = ${minHeight}px to ${maxHeight}px`
            );
          } else {
            resolve('');
          }
        };

        // Reject promise on error
        image.onerror = (error: any) => {
          reject('Error loading Image');
        };
      };
    });

    return promise;
  }

  public async uploadImage(
    filePath: string,
    imageData: any,
    overWrite: boolean = false,
    userId: string = '',
    isBas64: boolean = false
  ): Promise<ImageFileInfo> {
    const fireStorage = getStorage(
      this.commonFireSvc.initOrGetFirebaseApp(),
      this.libConfig.firebase.storageBucket
    );
    const fileUrl = this.buildImageUrl(filePath, userId);
    const fileRef = ref(fireStorage, fileUrl);

    // If exists
    if (!overWrite) {
      try {
        const isExists = await getDownloadURL(fileRef);
        if (isExists) {
          throw new Error('Image already exists -' + filePath);
        }
      } catch (error: any) {
        if (error.code !== 'storage/object-not-found') {
          throw error;
        }
      }
    }

    try {

      if (isBas64) {
        imageData = await this.compressBase64ToJpeg(imageData);
      }

      const uploadResult = await uploadBytes(fileRef, imageData);
      const downloadUrl = await this.getImageUrl(filePath, userId);
      const imageFileInfo: ImageFileInfo = {
        name: uploadResult.ref.name,
        fullPath: uploadResult.ref.fullPath,
        downloadUrl,
      };

      return imageFileInfo;
    } catch (error: any) {
      throw error;
    }
  }

  public async getImageUrl(
    filePath: string,
    userId: string = ''
  ): Promise<string> {
    const fireStorage = getStorage(
      this.commonFireSvc.initOrGetFirebaseApp(),
      this.libConfig.firebase.storageBucket
    );
    const fileUrl = this.buildImageUrl(filePath, userId);
    const fileRef = ref(fireStorage, fileUrl);

    try {
      const url = await getDownloadURL(fileRef);

      return url;
    } catch (error: any) {
      throw error;
    }
  }

  public async deleteImage(
    filePath: string,
    userId: string = ''
  ): Promise<void> {
    const fireStorage = getStorage(
      this.commonFireSvc.initOrGetFirebaseApp(),
      this.libConfig.firebase.storageBucket
    );
    const fileUrl = this.buildImageUrl(filePath, userId);
    const fileRef = ref(fireStorage, fileUrl);

    try {
      return await deleteObject(fileRef);
    } catch (error: any) {
      throw error;
    }
  }

  public async getImagesList(
    filePath: string,
    pageSize: number = 10,
    nextPageToken: any = null,
    userId: string = ''
  ): Promise<ImageFileInfoList> {
    const fireStorage = getStorage(
      this.commonFireSvc.initOrGetFirebaseApp(),
      this.libConfig.firebase.storageBucket
    );
    const lookinFolder = this.buildImageUrl(filePath, userId);
    const listRef = ref(fireStorage, lookinFolder);

    try {
      const listOptions: ListOptions = { maxResults: pageSize };
      if (nextPageToken) listOptions.pageToken = nextPageToken;

      const imageList: ListResult = await list(listRef, listOptions);
      const imageFileInfoList: ImageFileInfoList = {
        imageFiles: imageList.items.map((img) => ({
          name: img.name,
          fullPath: img.fullPath,
          downloadUrl: '',
        })),
        nextPageToken: imageList.nextPageToken,
      };

      return imageFileInfoList;
    } catch (error: any) {
      throw error;
    }
  }

  public async imageExists(
    filePath: string,
    userId: string = ''
  ): Promise<boolean> {
    const fireStorage = getStorage(
      this.commonFireSvc.initOrGetFirebaseApp(),
      this.libConfig.firebase.storageBucket
    );
    const fileUrl = this.buildImageUrl(filePath, userId);
    const fileRef = ref(fireStorage, fileUrl);

    try {
      const url = await getDownloadURL(fileRef);

      return !!url;
    } catch (error: any) {
      if (error.code !== 'storage/object-not-found') {
        throw error;
      } else {
        return false;
      }
    }
  }

  public async compressBase64ToJpeg(base64Image: string): Promise<Blob> {
    const { maxWidth } =
    this.libConfig.firebaseStoreConfig;

    return new Promise((resolve, reject) => {
      // Convert base64 to blob
      const blob = this.dataURItoBlob(base64Image, 'image/jpeg');
      const compressOptions: Compressor.Options = {
        strict: true,
        checkOrientation: true,
        width: maxWidth, // Set the maximum width of the compressed image (optional)
        height: maxWidth/2,
        maxWidth: maxWidth, // Set the maximum width of the compressed image (optional)
        maxHeight: maxWidth/2,
        resize: 'cover',
        convertTypes: 'image/jpg',
        quality: 0.7, // Set the image quality (optional)

        success: (compressedBlob: Blob) => {
          // Handle the compressed image blob
          resolve(compressedBlob);
        },
        error: (error: any) => {
          reject(`Image compression error:${error.message}`);
        },
      }
      // Create an image compressor instance
      new Compressor(blob, compressOptions);
    });
  }

  public dataURItoBlob(dataURI: string, type: string): Blob {
    const byteString = atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }

    return new Blob([uint8Array], { type });
  }
}
