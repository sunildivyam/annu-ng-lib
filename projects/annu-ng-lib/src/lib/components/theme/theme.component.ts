import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { Theme } from './theme.interface';

@Component({
  selector: 'anu-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
  palettes: Palettes;
  theme: Theme;

  constructor(private themeService: ThemeService) {
    this.palettes = {
      primary: [],
      secondary: [],
      accent: [],
      background: []
    };
  }

  public paletteChanged = (colors: Array<string>, paletteName: string): void => {
    this.palettes[paletteName] = colors;
    this.theme = this.themeService.generateTheme(
      'themeName',
      'Theme Description',
      this.palettes.primary,
      this.palettes.secondary,
      this.palettes.accent,
      this.palettes.background);
  }
}

interface Palettes {
  primary: Array<string>;
  secondary: Array<string>;
  accent: Array<string>;
  background: Array<string>;
}
