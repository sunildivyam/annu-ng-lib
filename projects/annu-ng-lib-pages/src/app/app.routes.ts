import { Routes } from '@angular/router';

// Components from Lib
import { OverviewPageComponent,
  CardPageComponent,
  ThemePageComponent,
  ThemePickerPageComponent,
  ColorPalettePageComponent,
  TabsPageComponent,
  ThemePreviewPageComponent } from './page-components';

export const routes: Routes = [
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  { path: 'overview', component: OverviewPageComponent, data: {title: 'Getting Started'}},
  { path: 'card', component: CardPageComponent, data: {title: 'Card'}},
  { path: 'color-palette', component: ColorPalettePageComponent, data: {title: 'Color Palette'} },
  { path: 'theme', component: ThemePageComponent, data: {title: 'Theme'} },
  { path: 'theme-preview', component: ThemePreviewPageComponent, data: {title: 'Preview Theme'} },
  { path: 'theme-picker', component: ThemePickerPageComponent, data: {title: 'Theme Picker'} },
  { path: 'tabs', component: TabsPageComponent, data: {title: 'Tabs'} },
];
