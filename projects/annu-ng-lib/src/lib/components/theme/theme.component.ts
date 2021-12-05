import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { Theme, Palettes } from './theme.interface';
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
    name: 'typograpgy',
    title: 'Typography',
  } as Tab,
  {
    name: 'json',
    title: 'JSON View',
  } as Tab
];

@Component({
  selector: 'anu-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
  palettes: Palettes;
  theme: Theme;
  tabs: Array<Tab> = TABS;
  selectedTab: Tab;
  themeName: string;
  themeTitle: string;
  themeDescription: string;

  constructor(private themeService: ThemeService) {
    this.selectedTab = this.tabs[0];
    this.palettes = {
      primary: [],
      secondary: [],
      accent: [],
      background: []
    };
    this.generateTheme();
  }

  private generateTheme(): void {
    this.theme = this.themeService.generateTheme(
      this.themeName,
      this.themeTitle,
      this.themeDescription,
      this.palettes.primary,
      this.palettes.secondary,
      this.palettes.accent,
      this.palettes.background);
  }

  public tabChanged(tab: Tab): void {
    this.selectedTab = tab;
  }

  public paletteChanged = (colors: Array<string>, paletteName: string): void => {
    this.palettes[paletteName] = colors;
    this.generateTheme();
  }
}
