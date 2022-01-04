import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePreviewComponent } from './theme-preview.component';



@NgModule({
  declarations: [ThemePreviewComponent],
  imports: [
    CommonModule
  ],
  exports: [ThemePreviewComponent]
})
export class ThemePreviewModule { }
