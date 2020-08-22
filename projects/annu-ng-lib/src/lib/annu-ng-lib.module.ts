import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { CardComponent } from './components/card/card.component';
import { ThemeComponent } from './components/theme/theme.component';
import { ThemeService } from './services';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';

@NgModule({
  declarations: [CardComponent, ThemeComponent, ColorPaletteComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [CardComponent, ThemeComponent, ColorPaletteComponent]
})
export class AnnuNgLibModule {
  constructor(private themeService: ThemeService) {
    this.themeService.setTheme();
  }
}
