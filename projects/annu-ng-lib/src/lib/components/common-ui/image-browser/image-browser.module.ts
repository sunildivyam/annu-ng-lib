import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageBrowserComponent } from './image-browser.component';
import { CardModule } from '../card';
import { ErrorModule } from '../error';
import { SpinnerModule } from '../spinner';
import { SearchBoxModule } from '../search-box/search-box.module';



@NgModule({
  declarations: [
    ImageBrowserComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ErrorModule,
    SpinnerModule,
    SearchBoxModule,
  ],
  exports: [
    ImageBrowserComponent
  ],
})
export class ImageBrowserModule { }
