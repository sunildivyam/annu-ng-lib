import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { Theme } from './theme.interface';
import { Tab } from '../tabs';
import { ColorPalette } from '@annu-ng-lib';

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
    name: 'typograpgy',
    title: 'Typography',
  } as Tab,
  {
    name: 'json',
    title: 'JSON View',
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

  constructor(private themeService: ThemeService) {
    this.selectedTab = this.tabs[0];
    this.theme = {
      name: 'default',
      title: 'Default Theme',
      description: 'Default theme description',
      colorPalettes: COLOR_PALETTES,
      typography: []
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
}
