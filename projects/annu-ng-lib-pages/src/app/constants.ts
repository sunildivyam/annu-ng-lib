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


export const DOCS_NAVS = [
    {
        id: 'components',
        title: 'Components',
        href: 'components',
        subNav: [
            {
                id: 'lib/components/cms',
                title: 'CMS',
                href: 'cms',
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
        ]
    },
    {
        id: 'services',
        title: 'Services',
        href: 'services',
        subNav: [
            {
                id: 'lib/services',
                title: 'Library',
                href: 'lib',
                subNav: []
            },
            {
                id: 'lib/components/cms',
                title: 'CMS',
                href: 'library',
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
            },
            {
                id: 'lib/firebase',
                title: 'Firebase',
                href: 'firebase',
                subNav: []
            }
        ]
    }
]
