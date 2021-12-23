import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageFormComponent } from './image-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ImageFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ImageFormComponent],
})
export class ImageFormModule { }
