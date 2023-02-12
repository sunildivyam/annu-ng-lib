import { DocsData } from '../../docs/docs.interface';
import { MenuItem } from './menu.interface';

 export const MENU_ITEMS: Array<MenuItem> = [
    {
        href: ['./sample-route1'],
        title: 'Nav Item 1',
        disabled: false,
    },
    {
        href: ['./sample-route2'],
        title: 'Nav Item 2',
        disabled: false,
    },
    {
        href: ['./sample-route3'],
        title: 'Nav Item 3',
        disabled: true,
    }, {
        href: ['./sample-route4'],
        title: 'Nav Item 4',
        disabled: false,
    }, {
        href: ['./sample-route5'],
        title: 'Nav Item 5',
        disabled: false,
    }
];
export const MenuComponent: DocsData = {
    projectionContent: 'Projeccted Item',
    inputPropsValues: {
        items: [...MENU_ITEMS],
        heading: 'Annu Library',
        subHeading: 'UI components',
        logoUrl: '/favicon.ico'
    }
}
