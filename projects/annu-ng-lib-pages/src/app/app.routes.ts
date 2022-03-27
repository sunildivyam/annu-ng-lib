import { Routes } from '@angular/router';
import { IsLoggedInGuard } from '@annu/ng-lib';
import { ROUTE_TYPES } from './constants';

// Components from Lib
import {
  OverviewPageComponent,
  ServicePageComponent,
  ComponentPageComponent,
} from './page-components';

// Main Nav Routes
export const mainRoutes = [
  { path: 'overview', component: OverviewPageComponent, data: { type: ROUTE_TYPES.main, title: 'Getting Started' } /*, canActivate: [IsLoggedInGuard] */ },
  { path: 'documentation', component: OverviewPageComponent, data: { type: ROUTE_TYPES.main, title: 'Documentation' } },
  { path: 'contact-us', component: OverviewPageComponent, data: { type: ROUTE_TYPES.main, title: 'Contact Us' } },
]

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  // Main Routes
  ...mainRoutes,

  // Services Routes
  { path: 'services/:docType/:serviceName', component: ServicePageComponent, data: { title: 'Services' } },

  // Components Routes
  { path: 'components/:docType/:componentName', component: ComponentPageComponent, data: { title: 'Components' } },
];
