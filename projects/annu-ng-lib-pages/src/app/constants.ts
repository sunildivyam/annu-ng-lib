import { AppConfig } from "@annu-ng-lib/components/common-ui";

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
    title: 'Annu Angular Business Components Library Documentation',
    description: 'The objective of this project to develop a framework that can provide all required bolts and nuts to retail requirements, for example: Hiring and Jobs Retail Shopping and e-commerce Tour, Travel & hotels Web classifieds, etc.',
    copyrightText: 'copyright©annuNgLib',
    themeName: 'armyGreen',
  };
