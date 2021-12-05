import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeComponent } from './theme.component';
import { ColorPaletteModule } from '../color-palette/color-palette.module';
import { TabsModule } from '../tabs';


@NgModule({
  declarations: [ThemeComponent],
  imports: [
    CommonModule,
    ColorPaletteModule,
    TabsModule
  ],
  exports: [ThemeComponent],
})
export class ThemeModule { }
