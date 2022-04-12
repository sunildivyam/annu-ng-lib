import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageFormComponent } from './image-form.component';
import { FormsModule } from '@angular/forms';
import { ErrorModule } from '../error';
import { ImageBrowserModule } from '../image-browser';



@NgModule({
  declarations: [ImageFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ErrorModule,
    ImageBrowserModule,
  ],
  exports: [ImageFormComponent],
})
export class ImageFormModule { }
