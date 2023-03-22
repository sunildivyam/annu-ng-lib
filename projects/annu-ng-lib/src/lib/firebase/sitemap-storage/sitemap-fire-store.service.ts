import { Injectable } from '@angular/core';
import { LibConfig } from '../../app-config';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import { CommonFirebaseService } from '../common-firebase';
import { sitemapFileName } from './sitemap-storage.constants';

@Injectable()
export class SitemapFireStoreService {
  public sitemapFileName: string = sitemapFileName;

  constructor(private commonFireSvc: CommonFirebaseService, private libConfig: LibConfig) {

  }

  public async uploadSitemap(sitemapData: string): Promise<boolean> {
    const fireStorage = getStorage(this.commonFireSvc.initOrGetFirebaseApp(), this.libConfig.firebase.storageBucket);
    const fileRef = ref(fireStorage, this.sitemapFileName);

    try {
      const uploadResult = await uploadString(fileRef, sitemapData);
      return true;
    } catch (error: any) {
      throw error;
    }
  }

  public async sitemapExists(): Promise<string> {
    const fireStorage = getStorage(this.commonFireSvc.initOrGetFirebaseApp(), this.libConfig.firebase.storageBucket);
    const fileRef = ref(fireStorage, this.sitemapFileName);

    try {
      const url = await getDownloadURL(fileRef);

      return url;
    } catch (error: any) {
      if (error.code !== 'storage/object-not-found') {
        throw error;
      } else {
        return '';
      }
    }
  }

}
