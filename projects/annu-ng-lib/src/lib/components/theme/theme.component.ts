import { Component } from '@angular/core';
import { ThemeService } from '../../services';
import { Theme } from '../../interfaces';

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
      accent: []
    };
  }

  public paletteChanged = (colors: Array<string>, paletteName: string): void => {
    this.palettes[paletteName] = colors;
    console.log(colors, paletteName);
    this.theme = this.themeService.generateTheme(
      'themeName',
      'Theme Description',
      this.palettes.primary,
      this.palettes.secondary,
      this.palettes.accent);
  }
}

interface Palettes {
  primary: Array<string>;
  secondary: Array<string>;
  accent: Array<string>;
}
