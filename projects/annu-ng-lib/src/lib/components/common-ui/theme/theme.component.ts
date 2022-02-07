import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { Theme, ColorPalette, Typography } from './theme.interface';
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

@Component({
  selector: 'anu-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
  theme: Theme;
  tabs: Array<Tab> = TABS;
  selectedTab: Tab;
  themeName: string;
  themeFromJson: string;
  isThemeFromJson: boolean = false;
  isJsonError: boolean = false;
  typography: Array<Typography> = TYPOGRAPHY;

  constructor(private themeService: ThemeService) {
    this.selectedTab = this.tabs.find(tb => tb.active === true);
    this.theme = {
      name: 'default',
      title: 'Default Theme',
      description: 'Default theme description',
      colorPalettes: COLOR_PALETTES,
      typography: this.typography,
    };
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
      this.theme = JSON.parse(this.themeFromJson);
      this.typography = this.theme.typography.map(t => ({...t}));
      this.isThemeFromJson = false;
    } catch(er) {
      this.isJsonError = true;
    }
  }

  public typographyChanged(typography: Array<Typography>) {
    // this.typography = typography;
    this.theme.typography = typography;
  }
}
