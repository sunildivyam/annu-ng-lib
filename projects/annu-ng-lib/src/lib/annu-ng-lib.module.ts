import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TabsModule } from './components/tabs/tabs.module';
import { ColorPaletteModule } from './components/color-palette/color-palette.module';
import { ThemeModule } from './components/theme/theme.module';
import { CardModule } from './components/card/card.module';
import { ThemePickerModule } from './components/theme-picker/theme-picker.module';
import { TypographyModule } from './components/typography/typography.module';
import { ThemePreviewModule } from './components/theme-preview/theme-preview.module';
import { HamburgerModule } from './components/hamburger/hamburger.module';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
  ],
  exports: [
    TabsModule,
    ColorPaletteModule,
    ThemeModule,
    CardModule,
    ThemePickerModule,
    TypographyModule,
    ThemePreviewModule,
    HamburgerModule,
  ]
})
export class AnnuNgLibModule {
  constructor() {
    
  }
}
