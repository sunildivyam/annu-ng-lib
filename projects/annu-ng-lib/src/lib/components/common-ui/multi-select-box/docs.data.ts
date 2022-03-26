import { DocsData } from '../../docs/docs.interface';

export const SAMPLE_MULTI_SELECT_ITEMS = [
    {
        id: '1',
        title: 'Sample Item 1'
    },
    {
        id: '2',
        title: 'Sample Item 2'
    },
    {
        id: '3',
        title: 'Sample Item 3'
    },
    {
        id: '4',
        title: 'Sample Item 4'
    },
    {
        id: '5',
        title: 'Sample Item 5'
    },
]

export const MultiSelectBoxComponent: DocsData = {
    projectionContent: '',
    inputPropsValues: {
        items: [...SAMPLE_MULTI_SELECT_ITEMS],
        keyField: 'id',
        labelField: 'title'
    }
}
