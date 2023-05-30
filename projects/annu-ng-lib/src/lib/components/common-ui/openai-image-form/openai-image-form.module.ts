import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenaiImageFormComponent } from './openai-image-form.component';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from '../spinner/spinner.module';



@NgModule({
  declarations: [
    OpenaiImageFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    SpinnerModule,
  ],
  exports: [
    OpenaiImageFormComponent,
  ]
})
export class OpenaiImageFormModule { }
