import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPaletteComponent } from './color-palette.component';

@NgModule({
  declarations: [ColorPaletteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ColorPaletteComponent]
})
export class ColorPaletteModule { }
