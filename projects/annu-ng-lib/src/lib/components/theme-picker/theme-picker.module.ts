import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemePickerComponent } from './theme-picker.component';

@NgModule({
  declarations: [ThemePickerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [ThemePickerComponent],
})
export class ThemePickerModule { }
