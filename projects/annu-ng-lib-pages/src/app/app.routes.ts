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
  CodeBlockPageComponent,
  MetaPageComponent,
  HamburgerPageComponent,
  ComponentInfoPageComponent,
} from './page-components';

const route: Route = {

}

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },

  // Main Nav Routes
  { path: 'overview', component: OverviewPageComponent, data: { type: ROUTE_TYPES.main, title: 'Getting Started' } },
  { path: 'documentation', component: OverviewPageComponent, data: { type: ROUTE_TYPES.main, title: 'Documentation' } },
  { path: 'contact-us', component: OverviewPageComponent, data: { type: ROUTE_TYPES.main, title: 'Contact Us' } },

  // Common UI Component Routes
  { path: 'overview', component: OverviewPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Getting Started' } },
  { path: 'card', component: CardPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Card' } },
  { path: 'color-palette', component: ColorPalettePageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Color Palette' } },
  { path: 'theme', component: ThemePageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Theme' } },
  { path: 'theme-preview', component: ThemePreviewPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Preview Theme' } },
  { path: 'theme-picker', component: ThemePickerPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Theme Picker' } },
  { path: 'tabs', component: TabsPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Tabs' } },
  { path: 'menu', component: MenuPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Menu' } },
  { path: 'footer-nav', component: FooterNavPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Footer Navigation' } },
  { path: 'aside-nav', component: AsideNavPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Aside Navigation' } },
  { path: 'toolbar', component: ToolbarPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Toolbar' } },
  { path: 'pagination', component: PaginationPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Pagination' } },
  { path: 'toggle', component: TogglePageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Toggle' } },
  { path: 'layout', component: LayoutPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Layouts' } },
  { path: 'modal', component: ModalPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Modal' } },
  { path: 'code-block', component: CodeBlockPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Code Block' } },
  { path: 'meta', component: MetaPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Meta' } },
  { path: 'hamburger', component: HamburgerPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Hamburger' } },

  // CMS Component Routes
  { path: 'content-editor', component: ContentEditorPageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Content Editor' } },
  { path: 'article', component: ArticlePageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Article' } },
  { path: 'article-editor', component: ArticleEditorPageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Article Editor' } },

  // Docs Component Routes
  { path: 'component-info', component: ComponentInfoPageComponent, data: { type: ROUTE_TYPES.components.docs, title: 'Component Info' } },

];
