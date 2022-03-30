import { Routes } from '@angular/router';
import { IsLoggedInGuard, LibDocsHomeViewRouteResolver, LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS } from '@annu/ng-lib';
import { ROUTE_TYPES } from './constants';

// Components from Lib
import {
  OverviewPageComponent,
  ServicePageComponent,
  ComponentPageComponent,
  LibDocsHomePageComponent,
} from './page-components';

// Main Nav Routes
export const mainRoutes = [
  { path: 'overview', component: OverviewPageComponent, data: { type: ROUTE_TYPES.main, title: 'Getting Started' } /*, canActivate: [IsLoggedInGuard] */ },
  { path: 'documentation', component: OverviewPageComponent, data: { type: ROUTE_TYPES.main, title: 'Documentation' } },
  { path: 'contact-us', component: OverviewPageComponent, data: { type: ROUTE_TYPES.main, title: 'Contact Us' } },
]

export const libDocsRoutes = [
  // Services Routes
  { path: 'services/:docType/:serviceName', component: ServicePageComponent, data: { title: 'Services' } },

  // Components Routes
  { path: 'components/:docType/:componentName', component: ComponentPageComponent, data: { title: 'Components' } },
];

export const routes: Routes = [
  ...mainRoutes,

  {
    path: '', component: LibDocsHomePageComponent,
    resolve: { [LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS.LIB_DOCS_HOME_VIEW]: LibDocsHomeViewRouteResolver},
    // Article Public Routes
    children: [...libDocsRoutes],
  },

  //Any Other route (non-existant routes)
  { path: '**', redirectTo: '', pathMatch: 'full' }, // or set to ErrorComponentPage
];
