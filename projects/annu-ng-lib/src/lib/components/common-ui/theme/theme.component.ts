import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { Theme } from './theme.interface';
import { Typography } from '../typography';

import { ColorPalette } from '../color-palette';

import { Tab } from '../tabs';

const TABS = [
  {
    name: 'overview',
    title: 'Overview',
    active: true
  } as Tab,
  {
    name: 'palettes',
    title: 'Colors'
  } as Tab,
  {
    name: 'typography',
    title: 'Typography',
  } as Tab,
  {
    name: 'json',
    title: 'JSON',
  } as Tab
];

const COLOR_PALETTES = [
  {
    name: 'primary',
    hue: 180,
    saturation: 50,
    colors: []
  } as ColorPalette,
  {
    name: 'secondary',
    hue: 180,
    saturation: 50,
    colors: []
  } as ColorPalette,
  {
    name: 'accent',
    hue: 180,
    saturation: 50,
    colors: []
  } as ColorPalette,
  {
    name: 'background',
    hue: 180,
    saturation: 50,
    colors: []
  } as ColorPalette
];

const TYPOGRAPHY: Array<Typography> = [
  {
    name: 'fontFamily',
    value: 'Arial'
  } as Typography,
  {
    name: 'fontSize',
    value: '14px'
  } as Typography,
  {
    name: 'spacing',
    value: '1rem',
  } as Typography,
  {
    name: 'borderRadius',
    value: '0.5rem',
  } as Typography,
];

const DEFAULT_THEME_JSON = {
  name: 'default',
  title: 'Default Theme',
  description: 'Default theme description',
  colorPalettes: COLOR_PALETTES.map(cp => ({ ...cp })),
  typography: TYPOGRAPHY.map(tp => ({ ...tp })),
};

@Component({
  selector: 'anu-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
  theme: Theme = { ...DEFAULT_THEME_JSON };
  tabs: Array<Tab> = [...TABS];
  selectedTab: Tab = null;
  themeName: string = '';
  themeFromJson: string = '';
  isThemeFromJson: boolean = false;
  isJsonError: boolean = false;
  typography: Array<Typography> = [...TYPOGRAPHY];

  constructor(private themeService: ThemeService) {
    this.selectedTab = this.tabs.find(tb => tb.active === true);
  }

  public tabChanged(tab: Tab): void {
    this.selectedTab = tab;
  }

  public paletteChanged = (colorPalette: ColorPalette): void => {
    this.theme.colorPalettes.forEach(cp => {
      if (cp.name === colorPalette.name) cp = colorPalette;
    });
  }

  public getCssVars(theme: Theme) {
    return this.themeService.getCssVars(theme);
  }

  public loadThemeFromJson(): void {
    this.isJsonError = false;
    try {
      const parsedTheme = JSON.parse(this.themeFromJson);
      const { name, title, colorPalettes, typography } = parsedTheme;
      if (!name || !title || !(colorPalettes instanceof Array) || !(typography instanceof Array)) {
        this.isJsonError = true;
      } else {
        this.theme = parsedTheme;
        this.typography = this.theme.typography.map(t => ({ ...t }));
        this.isThemeFromJson = false;
      }
    } catch (er) {
      this.isJsonError = true;
    }
  }

  public typographyChanged(typography: Array<Typography>) {
    // this.typography = typography;
    this.theme.typography = typography;
  }
}
