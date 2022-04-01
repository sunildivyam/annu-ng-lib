import { DocsData } from '../../docs/docs.interface';

export const SearchBoxComponent: DocsData = {
    projectionContent: '',
    inputPropsValues: {
        items: [
            { title: 'title 1', description: 'Item 1 description text' },
            { title: 'title 2', description: 'Item 2 description text' },
            { title: 'title 3', description: 'Item 3 description text' },
        ],
        keys: ['title', 'description']
    }
}
