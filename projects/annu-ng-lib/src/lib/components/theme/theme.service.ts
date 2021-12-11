import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import themes from '../../themes';
import { PaletteColor, Typography, CssVar, ColorPalette } from './theme.interface';
import { Theme } from './theme.interface';

const DEFAULT_THEME = 'default';
const PALETTE_COLOR_COUNT = 8;
const PALETTE_LIGHTNESS_START = 10;
const PALETTE_SHADES = ['DeepDark', 'Darkest', 'Darker', 'Dark', 'Normal', 'Light', 'Lighter', 'Lightest', 'DeepLight'];

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private selectedThemeName: BehaviorSubject<string>;

  constructor() {
    this.selectedThemeName = new BehaviorSubject<string>('');
    this.selectedThemeName.subscribe(themeName => this.loadTheme(themeName));
  }

  /*
  * get css var name and value.
  */
  private getCssVar(name: string, value: string = ''): CssVar {
    if (!name) {
      return;
    }

    if (value) {
      name = '--anu-' + name;
      return { name, value } as CssVar;
    }

    return;
  }

  /*
  * write a css variable to DOM
  */
  private writeCssVarToDom(name: string, value: string = ''): void {
    const cssVar = this.getCssVar(name, value);
    if (cssVar) {
      document.documentElement.style.setProperty(cssVar.name, cssVar.value);
      // getComputedStyle(document.documentElement).getPropertyValue(name);
    }
  }

  /*
  * Loads the selected theme json from themes folder, and writes all css variables to DOM
  */
  private loadTheme(themeName: string): boolean {
    let theme = themes[themeName] as Theme;
    if (!theme) {
      return false;
    }
    // Write Color CSS variables to DOM
    theme.colorPalettes.forEach(cp => {
      cp.colors.forEach(c => {
        this.writeCssVarToDom(`${cp.name}${c.name}`, c.hsl)
      })
    })
    // Write Typography CSS variables to DOM
    theme.typography.forEach(tp => {
      this.writeCssVarToDom(tp.name, tp.value);
    })

    return true;
  }

  /*
   * returns a list of css vars as combined string of name and value
   */
  public getCssVars(theme: Theme): Array<string> {
    const cssVars: Array<string> = [];
    // get Color CSS variables
    theme.colorPalettes.forEach(cp => {
      cp.colors.forEach(c => {
        const cssVar = this.getCssVar(`${cp.name}${c.name}`, c.hsl);
        cssVars.push(`${cssVar.name}: ${cssVar.value}`);
      })
    })
    // get Typography CSS variables
    theme.typography.forEach(tp => {
      const cssVar = this.getCssVar(tp.name, tp.value);
      cssVars.push(`${cssVar.name}: ${cssVar.value}`);
    })
    return cssVars;
  }

  /*
  * returns the Available themes as an Array
  */
  public get themes(): Array<Theme> {
    return Object.values(themes);
  }

  public get theme(): string {
    return this.selectedThemeName.getValue();
  }

  public get paletteShades(): Array<string> {
    return PALETTE_SHADES;
  }

  /*
  * returns the primary Theme Color code. basically primaryNormal color code
  */
  public getThemeColor(theme: Theme): string {
    let themeColor: string;
    const primaryPalette: ColorPalette = theme.colorPalettes.find(cp => cp.name === 'primary') || {} as ColorPalette;
    const primaryNormal: PaletteColor = primaryPalette.colors.find(c => c.name === 'Normal')

    return primaryNormal.hsl;
  }

  public getTheme(): Observable<string> {
    return this.selectedThemeName.asObservable();
  }

  public setTheme(themeName: string = '', forced: boolean = true): void {
    if (forced) {
      if (!themes[themeName]) {
        themeName = DEFAULT_THEME;
      }
    } else {
      themeName = window.localStorage.getItem('selectedThemeName');
      if (!themes[themeName]) {
        themeName = DEFAULT_THEME;
      }
    }

    window.localStorage.setItem('selectedThemeName', themeName);
    this.selectedThemeName.next(themeName);
  }

  public toggleInvert(invert: boolean): void {
    if (invert === true) {
      document.documentElement.style.setProperty('filter', 'invert(1) brightness(0.6)');
    } else {
      document.documentElement.style.setProperty('filter', '');
    }
  }

  public getPaletteColors(hue: number, saturation: number): Array<PaletteColor> {
    /**
     * Hue 0 - 360 degree
     * Saturation - 0% - 100%
     * Lightness - 0% - 100%
     */
    const colors = [];

    const factoringNumer = (99 - PALETTE_LIGHTNESS_START) / PALETTE_COLOR_COUNT; // equal portions of 100%
    for (let i = 0; i <= PALETTE_COLOR_COUNT; i++) {
      const l = PALETTE_LIGHTNESS_START + (i * factoringNumer);
      const paletteColor: PaletteColor = {
        name: PALETTE_SHADES[i],
        hsl: `hsl(${hue}, ${saturation}%, ${l}%)`
      }

      colors.push(paletteColor);
    }

    return colors;
  }
}
