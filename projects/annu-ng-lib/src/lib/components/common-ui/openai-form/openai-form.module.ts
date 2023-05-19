import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenaiFormComponent } from './openai-form.component';
import { FormsModule } from '@angular/forms';
import { CollapsibleModule } from '../collapsible/collapsible.module';



@NgModule({
  declarations: [
    OpenaiFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CollapsibleModule,
  ],
  exports: [
    OpenaiFormComponent
  ]
})
export class OpenaiFormModule { }
