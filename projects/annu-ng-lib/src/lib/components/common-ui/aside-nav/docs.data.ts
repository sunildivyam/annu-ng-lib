import { DocsData } from '../../docs/docs.interface';
import { NavItem } from './aside-nav.interface';

export const navItems: Array<NavItem> = [
    {
        href: './sample-route1',
        params: ['param1'],
        title: 'Nav Item 1',
        disabled: false,
        separator: false,
    },
    {
        href: './sample-route2',
        params: ['param1'],
        title: 'Nav Item 2',
        disabled: false,
        separator: false,
    },
    {
        href: './sample-route3',
        params: ['param1'],
        title: 'Nav Item 3',
        disabled: true,
        separator: false,
    }, {
        href: './sample-route4',
        params: ['param1'],
        title: 'Nav Item 4',
        disabled: false,
        separator: true,
    }, {
        href: './sample-route5',
        params: ['param1'],
        title: 'Nav Item 5',
        disabled: false,
        separator: false,
    }
];

export const AsideNavComponent: DocsData = {
    projectionContent: 'Projected heading',
    inputPropsValues: {
        heading: 'Sample Heading',
        items: [...navItems]
    }
}
