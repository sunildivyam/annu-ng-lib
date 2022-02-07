import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeComponent } from './theme.component';
import { ColorPaletteModule } from '../color-palette/color-palette.module';
import { TabsModule } from '../tabs';
import { TypographyModule } from '../typography/typography.module';
import { CodeBlockModule } from '../code-block';


@NgModule({
  declarations: [ThemeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ColorPaletteModule,
    TabsModule,
    TypographyModule,
    CodeBlockModule
  ],
  exports: [ThemeComponent],
})
export class ThemeModule { }
