import { DocsData } from '../../docs/docs.interface';
import { ARTICLE } from '../article/docs.data';

export const ArticlesSlideshowComponent: DocsData = {
  projectionContent: '',
  inputPropsValues: {
    articles: [{ ...ARTICLE }, { ...ARTICLE }, { ...ARTICLE }, { ...ARTICLE }],
    isRowlayout: true,
    size: 'sm',
    descriptionCharCount: 200,
  },
};
