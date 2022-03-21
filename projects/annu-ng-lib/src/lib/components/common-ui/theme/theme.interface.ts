import { ColorPalette } from "../color-palette";
import { Typography } from '../typography';

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
