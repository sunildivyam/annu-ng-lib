export interface Theme {
    name: string;
    description: string;
    vars?: {
      // Primary color
      primary?: string;
      primaryDark?: string;
      primaryDarker?: string;
      primaryDarkest?: string;
      primaryLight?: string;
      primaryLighter?: string;
      primaryLightest?: string;
  
      // Secondary Color
      secondary?: string;
      secondaryDark?: string;
      secondaryDarker?: string;
      secondaryDarkest?: string;
      secondaryLight?: string;
      secondaryLighter?: string;
      secondaryLightest?: string;
  
      // Text Color
      accent?: string;
      accentDark?: string;
      accentDarker?: string;
      accentDarkest?: string;
      accentLight?: string;
      accentLighter?: string;
      accentLightest?: string;
  
      // background
      background?: string;
      backgroundDark?: string;
      backgroundDarker?: string;
      backgroundDarkest?: string;
      backgroundLight?: string;
      backgroundLighter?: string;
      backgroundLightest?: string;
  
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
  