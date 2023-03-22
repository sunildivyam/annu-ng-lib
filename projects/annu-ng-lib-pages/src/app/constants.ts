import { AppConfig } from "@annu/ng-lib";

export const ROUTE_TYPES = {
    main: 'Main',
    components: {
        default: 'Components',
        commonUi: 'Common UI Components',
        cms: 'CMS Components',
        docs: 'Documentation Components',
        auth: 'Authorization Components',
    },
    services: {
        default: 'Services',
        app: 'Application Services',
        commonUi: 'Common UI Services',
        cms: 'CMS Services',
        docs: 'Documentation Services',
        firebase: "Firebase Data Services",
    },
};

export const appConfig: AppConfig = {
    name: 'annu-ng-lib-pages',
    copyrightText: 'copyright©annuNgLib',
    themeName: 'armyGreen',
    tNcUrl: '',
    privacyPolicyUrl: '',
    loginUrl: '',
    logoutUrl: '',
    profileUrl: '',
    defaultPageSize: 5,
    metaInfo: {
        "title": "Annu Angular Library",
        "description": "The objective of this project to develop a framework that can provide all required bolts and nuts to retail requirements, for example: Hiring and Jobs Retail Shopping and e-commerce Tour, Travel & hotels Web classifieds, etc.",
        "keywords": "Annu Angular Library, UI Components Library, UI Business Components, Angular Business Components",
        "robots": "index, follow",
        "Content-Type": "text/html; charset=utf-8",
        "language": "english",
        "revisit-after": "7 days",
        "author": "Sunil Kumar",
        "type": "website",
        "article:published_time": "2022-01-03T17:53:35.868Z",
        "article:author": "Annu Business",
        "article:section": "business",
        "article:tag": "Annu Angular Library, UI Components Library, UI Business Components, Angular Business Components",
        "image": "image/url",
        "url": "https://github.com/sunildivyam/annu-ng-lib",
        "card": "summary_large_image",
        "site_name": "AnnuNgLib Pages",
        "audio": "",
        "video": ""
    },
    mainMenuItems: [],
};

const copyArray = (arr: Array<any> = []): Array<any> => arr.map(obj => ({...obj}))

const secSubNavs = [
    {
        id: 'lib/app-config',
        title: 'App Config',
        href: 'app-config',
        subNav: []
    },
    {
        id: 'lib/services',
        title: 'Library',
        href: 'lib',
        subNav: []
    },
    {
        id: 'lib/components/cms',
        title: 'CMS',
        href: 'cms',
        subNav: []
    },
    {
        id: 'lib/firebase',
        title: 'Firebase',
        href: 'firebase',
        subNav: []
    },
    {
        id: 'lib/components/common-ui',
        title: 'Common UI',
        href: 'common-ui',
        subNav: []
    },
    {
        id: 'lib/components/docs',
        title: 'Documentation',
        href: 'docs',
        subNav: []
    },
    {
        id: 'lib/components/auth',
        title: 'Authentication',
        href: 'auth',
        subNav: []
    }
];

export const DOCS_NAVS = [
    {
        id: 'components',
        title: 'Components',
        href: 'components',
        subNav: copyArray(secSubNavs)
    },
    {
        id: 'directives',
        title: 'Directives',
        href: 'directives',
        subNav: copyArray(secSubNavs)
    },
    {
        id: 'services',
        title: 'Services',
        href: 'services',
        subNav: copyArray(secSubNavs)
    },
    {
        id: 'interfaces',
        title: 'Interfaces',
        href: 'interfaces',
        subNav: copyArray(secSubNavs)
    },
    {
        id: 'classes',
        title: 'Classes',
        href: 'classes',
        subNav: copyArray(secSubNavs)
    },
    {
        id: 'guards',
        title: 'Guards',
        href: 'guards',
        subNav: [
            {
                id: 'lib/services/articles-route-resolvers',
                title: 'Articles Route Resolvers',
                href: 'articles-route-resolvers',
                subNav: []
            },
            {
                id: 'lib/services/lib-docs-route-resolvers',
                title: 'Library Docs Route Resolvers',
                href: 'lib-docs-route-resolvers',
                subNav: []
            },
            {
                id: 'lib/services/route-guards',
                title: 'Route Guards',
                href: 'route-guards',
                subNav: []
            },
        ]
    },
    {
        id: 'interceptors',
        title: 'Interceptors',
        href: 'interceptors',
        subNav: [
            {
                id: 'lib/services/interceptors',
                title: 'Interceptors',
                href: 'interceptors',
                subNav: []
            },
        ]
    }
]
