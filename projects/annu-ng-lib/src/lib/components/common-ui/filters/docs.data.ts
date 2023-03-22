import { DocsData } from '../../docs/docs.interface';

export const FiltersComponent: DocsData = {
    projectionContent: '',
    inputPropsValues: {
        filters: [
            {
                id: 'isFeatured',
                title: 'featured?',
                enabled: false,
                type: 'single-select',
                filter: {
                    yesLabel: 'Yes',
                    noLabel: 'No',
                    value: true
                }
            },
            {
                id: 'inReview',
                title: 'In-review?',
                enabled: false,
                type: 'single-select',
                filter: {
                    yesLabel: 'Yes',
                    noLabel: 'No',
                    value: true
                }
            },
            {
                id: 'isLive',
                title: 'Published?',
                enabled: false,
                type: 'single-select',
                filter: {
                    yesLabel: 'Live',
                    noLabel: 'offline',
                    value: true
                }
            },
            {
                id: 'userId',
                title: 'Author',
                enabled: false,
                type: 'single-select',
                filter: {
                    yesLabel: 'Mine',
                    noLabel: 'Others',
                    value: true
                }
            },
            {
                id: 'features',
                title: 'Choose Features',
                enabled: true,
                type: 'multi-select',
                filter: {
                    selectedValues: [],
                    values: [{ id: 'key1', title: 'value1' }, { id: 'key2', title: 'value2' }],
                    keyName: 'id',
                    valueName: 'title',
                }
            }
        ]
    }
}
