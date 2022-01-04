import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkFormComponent } from './link-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LinkFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [LinkFormComponent],
})
export class LinkFormModule { }
