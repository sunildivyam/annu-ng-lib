import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageBrowserComponent } from './image-browser.component';
import { CardModule } from '../card';
import { ErrorModule } from '../error';
import { SpinnerModule } from '../spinner';



@NgModule({
  declarations: [
    ImageBrowserComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ErrorModule,
    SpinnerModule,
  ],
  exports: [
    ImageBrowserComponent
  ],
})
export class ImageBrowserModule { }
