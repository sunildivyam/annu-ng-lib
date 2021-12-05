import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TabsModule } from './components/tabs/tabs.module';
import { ColorPaletteModule } from './components/color-palette/color-palette.module';
import { ThemeModule } from './components/theme/theme.module';
import { CardModule } from './components/card/card.module';
import { ThemePickerModule } from './components/theme-picker/theme-picker.module';


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
  ]
})
export class AnnuNgLibModule {
  constructor() {
    
  }
}
