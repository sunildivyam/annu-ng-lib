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
