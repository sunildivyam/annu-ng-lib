import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import themes from '../themes';
import { Theme } from '../interfaces';

const DEFAULT_THEME = 'shadyGrey';
const PALETTE_COLOR_COUNT = 7;

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

  private getShadeVars(name: string, colors: Array<string>): object  {
    const shades = ['Darkest', 'Darker', 'Dark', 'main', 'Light', 'Lighter', 'Lightest'];
    const shadeVars = {};
    colors.forEach((color, i) => {
      shadeVars[ shades[i] === 'main' ? name : `${name}${shades[i]}`] = color;
    });

    return shadeVars;
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

  public getPaletteColors(hue: number, saturation: number): Array<string> {
    const colors = [];
    const L = 10;
    for (let i = 0; i < PALETTE_COLOR_COUNT; i++) {
      const l = L + (i * 13);
      const color = `hsl(${hue}, ${saturation}%, ${l}%)`;
      colors.push(color);
    }

    return colors;
  }

  public generateTheme(
    name: string,
    description: string,
    primaryColors: Array<string>,
    secondaryColors: Array<string>,
    accentColors: Array<string>
    // primaryHue: number,
    // primarySaturation: number,
    // secondaryHue: number,
    // secondarySaturation: number,
    // accentHue: number,
    // accentSaturation: number
    ): Theme {

    // const primaryColors = this.getPaletteColors(primaryHue, primarySaturation) as Array<string>;
    // const secondaryColors = this.getPaletteColors(secondaryHue, secondarySaturation) as Array<string>;
    // const accentColors = this.getPaletteColors(accentHue, accentSaturation) as Array<string>;

    console.log({...this.getShadeVars('primary', primaryColors)});

    const theme: Theme = {
      name,
      description,
      vars: { ...this.getShadeVars('primary', primaryColors),
        ...this.getShadeVars('secondary', secondaryColors),
        ...this.getShadeVars('accent', accentColors)
      }
    };

    theme.vars = {
      ...theme.vars,
      // background
      background: theme.vars.primary,
      backgroundDark: theme.vars.primaryDark,
      backgroundDarker: theme.vars.primaryDarker,
      backgroundDarkest: theme.vars.primaryDarkest,
      backgroundLight: theme.vars.primaryLight,
      backgroundLighter: theme.vars.primaryLighter,
      backgroundLightest: theme.vars.primaryLightest,

      // error/warn/success
      error: 'hsl(0, 90%, 50%)',
      warn: 'hsl(50, 90%, 50%)',
      success: 'hsl(120, 90%, 50%)',

      // Typography
      fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      lineHeight: '1.5',
      characterSpacing: '100%',
      fontSize: '140x',
      borderRadius: '4px',
      borderWidth: '1px',
      spacing: '15px',
      boxShadow: '2px 2px 2px grey'
    };

    return theme;
  }

}
