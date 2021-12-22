import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemePickerComponent } from './theme-picker.component';
import { ToggleModule } from '../toggle/toggle.module';

@NgModule({
  declarations: [ThemePickerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToggleModule
  ],
  exports: [ThemePickerComponent],
})
export class ThemePickerModule { }
