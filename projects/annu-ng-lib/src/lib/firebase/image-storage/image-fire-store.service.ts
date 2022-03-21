import { Injectable } from '@angular/core';
import { LibConfig } from '../../app-config';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { CommonFirebaseService } from '../common-firebase';

@Injectable()
export class ImageFireStoreService {

  constructor(private commonFireSvc: CommonFirebaseService, private libConfig: LibConfig) {

  }

  public async uploadImage(filePath: string, imageData: any): Promise<boolean> {
    const fireStorage = getStorage(this.commonFireSvc.initOrGetFirebaseApp(), this.libConfig.firebase.storageBucket);
    const fileRef = ref(fireStorage, filePath);

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
    const fileRef = ref(fireStorage, filePath);

    try {
      const url = await getDownloadURL(fileRef);

      return url;
    } catch (error: any) {
      throw error;
    }
  }
}
