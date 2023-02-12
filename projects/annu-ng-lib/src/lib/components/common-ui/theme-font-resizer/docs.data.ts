import { DocsData } from '../../docs/docs.interface';
import { THEME_FONT_RESIZER_SIZES } from './theme-font-resizer.constants';
export const ThemeFontResizerComponent: DocsData = {
    projectionContent: '',
    inputPropsValues: {
        fontSizes: [...THEME_FONT_RESIZER_SIZES],
        selectedFontSize: ''
    }
}
