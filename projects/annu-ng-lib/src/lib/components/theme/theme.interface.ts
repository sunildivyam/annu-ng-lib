export interface Theme {
    name: string;
    title?: string,
    description?: string;
    vars?: {
      // Primary color
      primaryNormal?: string;
      primaryDark?: string;
      primaryDarker?: string;
      primaryDarkest?: string;
      primaryDeepDark?: string;
      primaryLight?: string;
      primaryLighter?: string;
      primaryLightest?: string;
      primaryDeepLight?: string;
  
      // Secondary Color
      secondaryNormal?: string;
      secondaryDark?: string;
      secondaryDarker?: string;
      secondaryDarkest?: string;
      secondaryDeepDark?: string;
      secondaryLight?: string;
      secondaryLighter?: string;
      secondaryLightest?: string;
      secondaryDeepLight?: string;
  
      // Text Color
      accentNormal?: string;
      accentDark?: string;
      accentDarker?: string;
      accentDarkest?: string;
      accentDeepDark?: string;
      accentLight?: string;
      accentLighter?: string;
      accentLightest?: string;
      accentDeepLight?: string;
  
      // background
      backgroundNormal?: string;
      backgroundDark?: string;
      backgroundDarker?: string;
      backgroundDarkest?: string;
      backgroundDeepDark?: string;
      backgroundLight?: string;
      backgroundLighter?: string;
      backgroundLightest?: string;
      backgroundDeepLight?: string;

      // error/warn/success
      error?: string;
      warn?: string;
      success?: string;
  
      // Typography
      fontFamily?: string;
      lineHeight?: string;
      characterSpacing?: string;
      fontSize?: string;
      borderRadius?: string;
      borderWidth?: string;
      spacing?: string;
      boxShadow?: string;
    };
  }
  
  
export interface Palettes {
  primary: Array<string>;
  secondary: Array<string>;
  accent: Array<string>;
  background: Array<string>;
}
