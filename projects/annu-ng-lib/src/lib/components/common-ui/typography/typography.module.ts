import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from './typography.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TypographyComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TypographyComponent]
})
export class TypographyModule { }
