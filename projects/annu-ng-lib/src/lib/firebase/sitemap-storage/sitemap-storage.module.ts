import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitemapFireStoreService } from './sitemap-fire-store.service';
import { CommonFirebaseModule } from '../common-firebase';
import { AppConfigModule } from '../../app-config';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonFirebaseModule,
    AppConfigModule,
  ],
  providers: [SitemapFireStoreService]
})
export class SitemapStorageModule { }
