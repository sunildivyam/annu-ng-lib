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
    // vars?: {
    //   // Primary color
    //   primaryNormal?: string;
    //   primaryDark?: string;
    //   primaryDarker?: string;
    //   primaryDarkest?: string;
    //   primaryDeepDark?: string;
    //   primaryLight?: string;
    //   primaryLighter?: string;
    //   primaryLightest?: string;
    //   primaryDeepLight?: string;
  
    //   // Secondary Color
    //   secondaryNormal?: string;
    //   secondaryDark?: string;
    //   secondaryDarker?: string;
    //   secondaryDarkest?: string;
    //   secondaryDeepDark?: string;
    //   secondaryLight?: string;
    //   secondaryLighter?: string;
    //   secondaryLightest?: string;
    //   secondaryDeepLight?: string;
  
    //   // Text Color
    //   accentNormal?: string;
    //   accentDark?: string;
    //   accentDarker?: string;
    //   accentDarkest?: string;
    //   accentDeepDark?: string;
    //   accentLight?: string;
    //   accentLighter?: string;
    //   accentLightest?: string;
    //   accentDeepLight?: string;
  
    //   // background
    //   backgroundNormal?: string;
    //   backgroundDark?: string;
    //   backgroundDarker?: string;
    //   backgroundDarkest?: string;
    //   backgroundDeepDark?: string;
    //   backgroundLight?: string;
    //   backgroundLighter?: string;
    //   backgroundLightest?: string;
    //   backgroundDeepLight?: string;

    //   // error/warn/success
    //   error?: string;
    //   warn?: string;
    //   success?: string;
  
    //   // Typography
    //   fontFamily?: string;
    //   lineHeight?: string;
    //   characterSpacing?: string;
    //   fontSize?: string;
    //   borderRadius?: string;
    //   borderWidth?: string;
    //   spacing?: string;
    //   boxShadow?: string;
    // };
  }

