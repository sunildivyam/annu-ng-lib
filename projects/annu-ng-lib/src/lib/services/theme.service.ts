import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import themes from '../themes';
import { Theme } from '../interfaces';

const DEFAULT_THEME = 'shadyGrey';
const PALETTE_COLOR_COUNT = 10;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private selectedTheme: BehaviorSubject<string>;

  constructor() {
    this.selectedTheme = new BehaviorSubject<string>('');
    this.selectedTheme.subscribe(themeName => this.loadTheme(themeName));
  }

  private cssVar(name: string, value: string = ''): string {
    if (!name) {
      return '';
    }

    if (name.indexOf('--') !== 0) {
      name = '--anu-' + name; // allow passing with or without --
    }
    if (value) {
      document.documentElement.style.setProperty(name, value);
    }

    return getComputedStyle(document.documentElement).getPropertyValue(name);
  }

  private loadTheme(themeName: string): boolean {
    const theme = themes[themeName] as Theme;
    if (!theme) {
      return false;
    }

    for (const [key, value] of Object.entries(theme.vars)) {
      this.cssVar(key, value);
    }

    return true;
  }

  public get toList(): Array<Theme> {
    return Object.values(themes).map((theme: Theme) => ({ name: theme.name, description: theme.description} as Theme));
  }

  public get themes(): Array<Theme> {
    return Object.values(themes);
  }

  public get theme(): string {
    return this.selectedTheme.getValue();
  }

  public getTheme(): Observable<string> {
    return this.selectedTheme.asObservable();
  }

  public setTheme(themeName: string = ''): void {
    if (!themeName) {
      themeName = window.localStorage.getItem('selectedTheme');
      if (!themeName) {
        themeName = DEFAULT_THEME;
      }
    }
    window.localStorage.setItem('selectedTheme', themeName);
    this.selectedTheme.next(themeName);
  }

  public toggleInvert(invert: boolean): void {
    if (invert === true) {
      document.documentElement.style.setProperty('filter', 'invert(1) brightness(0.6)');
    } else {
      document.documentElement.style.setProperty('filter', '');
    }
  }

  public getPaletteColors(hue: number): Array<string> {
    const colors = [];
    const S = 90;
    const L = 10;

    for (let i = 0; i < PALETTE_COLOR_COUNT / 2; i++) {
      // const s = 50 + (i < PALETTE_COLOR_COUNT / 2 ? (i * -4) : (i * 4));
      // const l = 50 + (i < PALETTE_COLOR_COUNT / 2 ? (i * -4) : (i * 4));
      const s = 100 - (i * 10);
      const l = 50 + (i * 5);
      console.log('s: ', s, 'l: ', l );
      const color = `hsl(${hue}, ${s}%, ${l}%)`;
      colors.push(color);
    }

    for (let i = 0; i < PALETTE_COLOR_COUNT; i++) {
      // const s = 50 + (i < PALETTE_COLOR_COUNT / 2 ? (i * -4) : (i * 4));
      // const l = 50 + (i < PALETTE_COLOR_COUNT / 2 ? (i * -4) : (i * 4));
      const s = 100 - (i * 10);
      const l = 50 + (i * 5);
      console.log('s: ', s, 'l: ', l );
      const color = `hsl(${hue}, ${s}%, ${l}%)`;
      colors.push(color);
    }

    return colors;
  }
}
