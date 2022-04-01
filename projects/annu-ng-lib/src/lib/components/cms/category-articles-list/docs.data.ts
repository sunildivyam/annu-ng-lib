import { DocsData } from '../../docs/docs.interface';
import { CATEGORY } from '../category/docs.data';

export const CategoryArticlesListComponent: DocsData = {
    projectionContent: '',
    inputPropsValues: {
        category: { ...CATEGORY },
        articles: []
    }
}
