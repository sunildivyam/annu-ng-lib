export interface PaletteColor {
  name: string; // names eg. normal, dark, darker etc..
  hsl: string
}

export interface ColorPalette {
  name: string;
  hue: number;
  saturation: number;
  colors: Array<PaletteColor>
}

export interface Typography {
  name: string;
  value: string;
}

export interface CssVar {
  name: string;
  value: string;
}

export interface Theme {
    name: string;
    title?: string,
    description?: string;
    colorPalettes: Array<ColorPalette>;
    typography: Array<Typography>;
  }
