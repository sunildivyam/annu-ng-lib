import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageFireStoreService } from './image-fire-store.service';
import { CommonFirebaseModule } from '../common-firebase';
import { AppConfigModule } from '../../app-config';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonFirebaseModule,
    AppConfigModule,
  ],
  providers: [ImageFireStoreService]
})
export class ImageStorageModule { }
