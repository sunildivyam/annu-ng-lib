import { Routes } from '@angular/router';

// Components from Lib
import { OverviewPageComponent, CardPageComponent, ThemePageComponent, ThemePickerPageComponent, ColorPalettePageComponent, TabsPageComponent } from './page-components';

export const routes: Routes = [
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  { path: 'overview', component: OverviewPageComponent, data: {title: 'Getting Started'}},
  { path: 'card-component', component: CardPageComponent, data: {title: 'Card'}},
  { path: 'theme-component', component: ThemePageComponent, data: {title: 'Theme'} },
  { path: 'color-palette-component', component: ColorPalettePageComponent, data: {title: 'Color Palette'} },
  { path: 'theme-picker-component', component: ThemePickerPageComponent, data: {title: 'Theme Picker'} },
  { path: 'tabs-component', component: TabsPageComponent, data: {title: 'Tabs'} },
];
