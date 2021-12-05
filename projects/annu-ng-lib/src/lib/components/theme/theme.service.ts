import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import themes from '../../themes';
import { Theme } from './theme.interface';

const DEFAULT_THEME = 'shadyGrey';
const PALETTE_COLOR_COUNT = 8;
const PALETTE_LIGHTNESS_START = 10;
const PALETTE_SHADES = ['DeepDark', 'Darkest', 'Darker', 'Dark', 'Normal', 'Light', 'Lighter', 'Lightest', 'DeepLight'];

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private selectedTheme: BehaviorSubject<string>;
  private counter: number;

  constructor() {
    this.counter = 0;
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
    let theme = themes[themeName] as Theme;
    if (!theme) {
      return false;
    }

    for (const [key, value] of Object.entries(theme.vars)) {
      this.cssVar(key, value);
    }

    return true;
  }

  private getShadeVars(name: string, colors: Array<string>): object  {
    const shadeVars = {};
    colors.forEach((color, i) => {
      shadeVars[`${name}${PALETTE_SHADES[i]}`] = color;
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

  public get paletteShades(): Array<string> {
    return PALETTE_SHADES;
  }

  public getTheme(): Observable<string> {
    return this.selectedTheme.asObservable();
  }

  public setTheme(themeName: string = '', forced: boolean = true): void {
    this.counter++;

    if (forced) {
      if (!themes[themeName]) {
        themeName = DEFAULT_THEME;
      }
    } else {      
      themeName = window.localStorage.getItem('selectedTheme');
      if (!themes[themeName]) {
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
    /**
     * Hue 0 - 360 degree
     * Saturation - 0% - 100%
     * Lightness - 0% - 100%
     */
    const colors = [];
    
    const factoringNumer = (99 - PALETTE_LIGHTNESS_START) / PALETTE_COLOR_COUNT; // equal portions of 100%
    for (let i = 0; i <= PALETTE_COLOR_COUNT; i++) {
      const l = PALETTE_LIGHTNESS_START + (i * factoringNumer);
      const color = `hsl(${hue}, ${saturation}%, ${l}%)`;
      colors.push(color);
    }

    return colors;
  }

  public generateTheme(
    name: string,
    title: string,
    description: string,
    primaryColors: Array<string>,
    secondaryColors: Array<string>,
    accentColors: Array<string>,
    backgroundColors: Array<string>
    ): Theme {
    const theme: Theme = {
      name,
      title,
      description,
      vars: { ...this.getShadeVars('primary', primaryColors),
        ...this.getShadeVars('secondary', secondaryColors),
        ...this.getShadeVars('accent', accentColors),
        ...this.getShadeVars('background', backgroundColors)
      }
    };

    theme.vars = {
      ...theme.vars,
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
