import { Injectable } from '@angular/core';
import { LibConfig } from '../../app-config';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { CommonFirebaseService } from '../common-firebase';

@Injectable()
export class ImageFireStoreService {
  public baseStoreUrl: string = '';

  constructor(private commonFireSvc: CommonFirebaseService, private libConfig: LibConfig) {
    this.baseStoreUrl = this.libConfig.firebaseStoreConfig.baseStoreUrl;
  }

  public async uploadImage(filePath: string, imageData: any): Promise<boolean> {
    const fireStorage = getStorage(this.commonFireSvc.initOrGetFirebaseApp(), this.libConfig.firebase.storageBucket);
    const fileUrl = this.baseStoreUrl + '/' + filePath;
    const fileRef = ref(fireStorage, fileUrl);

    // 'file' comes from the Blob or File API
    try {
      await uploadBytes(fileRef, imageData);

      return true;
    } catch (error: any) {
      throw error;
    }
  }

  public async getImageUrl(filePath: string): Promise<string> {
    const fireStorage = getStorage(this.commonFireSvc.initOrGetFirebaseApp(), this.libConfig.firebase.storageBucket);
    const fileUrl = this.baseStoreUrl + '/' + filePath;
    const fileRef = ref(fireStorage, fileUrl);

    try {
      const url = await getDownloadURL(fileRef);

      return url;
    } catch (error: any) {
      throw error;
    }
  }

  public validateImage(imageData: any): string {
    if (!imageData) return 'Empty Image';

    const {maxKBs} = this.libConfig.firebaseStoreConfig;
    if (imageData.length > maxKBs) {
      return 'Image size exceeds the limit of 1 MB'
    }

    return '';
  }
}
