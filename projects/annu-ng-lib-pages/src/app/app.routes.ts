import { Route, Routes } from '@angular/router';
import { ROUTE_TYPES } from './constants';

// Components from Lib
import {
  OverviewPageComponent,
  CardPageComponent,
  ThemePageComponent,
  ThemePickerPageComponent,
  ColorPalettePageComponent,
  TabsPageComponent,
  ThemePreviewPageComponent,
  TogglePageComponent,
  LayoutPageComponent,
  MenuPageComponent,
  FooterNavPageComponent,
  PaginationPageComponent,
  AsideNavPageComponent,
  ContentEditorPageComponent,
  ToolbarPageComponent,
  ModalPageComponent,
  ArticlePageComponent,
  ArticleEditorPageComponent,
} from './page-components';

const route: Route = {

}

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },

  { path: 'start-business', component: LayoutPageComponent, data: { type: ROUTE_TYPES.main, title: 'Start Business' } },
  { path: 'franchise', component: LayoutPageComponent, data: { type: ROUTE_TYPES.main, title: 'Franchise' } },
  { path: 'Business-tools', component: LayoutPageComponent, data: { type: ROUTE_TYPES.main, title: 'Business Tools' } },
  { path: 'best-products', component: LayoutPageComponent, data: { type: ROUTE_TYPES.main, title: 'Best Products' } },

  { path: 'overview', component: OverviewPageComponent, data: { type: ROUTE_TYPES.components, title: 'Getting Started' } },
  { path: 'card', component: CardPageComponent, data: { type: ROUTE_TYPES.components, title: 'Card' } },
  { path: 'color-palette', component: ColorPalettePageComponent, data: { type: ROUTE_TYPES.components, title: 'Color Palette' } },
  { path: 'theme', component: ThemePageComponent, data: { type: ROUTE_TYPES.components, title: 'Theme' } },
  { path: 'theme-preview', component: ThemePreviewPageComponent, data: { type: ROUTE_TYPES.components, title: 'Preview Theme' } },
  { path: 'theme-picker', component: ThemePickerPageComponent, data: { type: ROUTE_TYPES.components, title: 'Theme Picker' } },
  { path: 'tabs', component: TabsPageComponent, data: { type: ROUTE_TYPES.components, title: 'Tabs' } },
  { path: 'menu', component: MenuPageComponent, data: { type: ROUTE_TYPES.components, title: 'Menu' } },
  { path: 'footer-nav', component: FooterNavPageComponent, data: { type: ROUTE_TYPES.components, title: 'Footer Navigation' } },
  { path: 'aside-nav', component: AsideNavPageComponent, data: { type: ROUTE_TYPES.components, title: 'Aside Navigation' } },
  { path: 'toolbar', component: ToolbarPageComponent, data: { type: ROUTE_TYPES.components, title: 'Toolbar' } },
  { path: 'pagination', component: PaginationPageComponent, data: { type: ROUTE_TYPES.components, title: 'Pagination' } },
  { path: 'toggle', component: TogglePageComponent, data: { type: ROUTE_TYPES.components, title: 'Toggle' } },
  { path: 'layout', component: LayoutPageComponent, data: { type: ROUTE_TYPES.components, title: 'Layouts' } },
  { path: 'content-editor', component: ContentEditorPageComponent, data: { type: ROUTE_TYPES.components, title: 'Content Editor' } },
  { path: 'modal', component: ModalPageComponent, data: { type: ROUTE_TYPES.components, title: 'Modal' } },
  { path: 'article', component: ArticlePageComponent, data: { type: ROUTE_TYPES.components, title: 'Article' } },
  { path: 'article-editor', component: ArticleEditorPageComponent, data: { type: ROUTE_TYPES.components, title: 'Article Editor' } },
];
