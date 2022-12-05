import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageFormComponent } from './image-form.component';
import { FormsModule } from '@angular/forms';
import { ErrorModule } from '../error';
import { ImageBrowserModule } from '../image-browser';
import { CollapsibleModule } from '../collapsible';



@NgModule({
  declarations: [ImageFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ErrorModule,
    ImageBrowserModule,
    CollapsibleModule,
  ],
  exports: [ImageFormComponent],
})
export class ImageFormModule { }
