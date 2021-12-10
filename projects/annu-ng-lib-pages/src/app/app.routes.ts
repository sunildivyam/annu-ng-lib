import { Route, Routes } from '@angular/router';

// Components from Lib
import { OverviewPageComponent,
  CardPageComponent,
  ThemePageComponent,
  ThemePickerPageComponent,
  ColorPalettePageComponent,
  TabsPageComponent,
  ThemePreviewPageComponent,
  TogglePageComponent,
  LayoutPageComponent,
  MenuPageComponent,
  FooterNavPageComponent } from './page-components';

  const route:Route = {

  }

export const routes: Routes = [
  {path: '', redirectTo: '/overview', pathMatch: 'full'},

  { path: 'start-business', component: LayoutPageComponent, data: {type: 'main-navigation', title: 'Start Business'} },
  { path: 'franchise', component: LayoutPageComponent, data: {type: 'main-navigation', title: 'Franchise'} },
  { path: 'Business-tools', component: LayoutPageComponent, data: {type: 'main-navigation', title: 'Business Tools'} },
  { path: 'best-products', component: LayoutPageComponent, data: {type: 'main-navigation', title: 'Best Products'} },

  { path: 'overview', component: OverviewPageComponent, data: {title: 'Getting Started'}},
  { path: 'card', component: CardPageComponent, data: {title: 'Card'}},
  { path: 'color-palette', component: ColorPalettePageComponent, data: {title: 'Color Palette'} },
  { path: 'theme', component: ThemePageComponent, data: {title: 'Theme'} },
  { path: 'theme-preview', component: ThemePreviewPageComponent, data: {title: 'Preview Theme'} },
  { path: 'theme-picker', component: ThemePickerPageComponent, data: {title: 'Theme Picker'} },
  { path: 'tabs', component: TabsPageComponent, data: {title: 'Tabs'} },
  { path: 'toggle', component: TogglePageComponent, data: {title: 'Toggle'} },
  { path: 'layout', component: LayoutPageComponent, data: {title: 'Layouts'} },
  { path: 'menu', component: MenuPageComponent, data: {title: 'Menu'} },
  { path: 'footer-nav', component: FooterNavPageComponent, data: {title: 'Footer Navigation'} },
];
