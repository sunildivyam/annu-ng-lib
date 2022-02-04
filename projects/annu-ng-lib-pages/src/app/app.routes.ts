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
  CategoryPageComponent,
  CategoryEditorPageComponent,
  ArticleListPageComponent,

} from './page-components';

  // Main Nav Routes
export const mainRoutes = [
  { path: 'overview', component: OverviewPageComponent, data: { type: ROUTE_TYPES.main, title: 'Getting Started' } },
  { path: 'documentation', component: OverviewPageComponent, data: { type: ROUTE_TYPES.main, title: 'Documentation' } },
  { path: 'contact-us', component: OverviewPageComponent, data: { type: ROUTE_TYPES.main, title: 'Contact Us' } },
]

// Common UI Component Routes
export const commonUiRoutes = [
  { path: 'components/common-ui/card', component: CardPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Card' } },
  { path: 'components/common-ui/color-palette', component: ColorPalettePageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Color Palette' } },
  { path: 'components/common-ui/theme', component: ThemePageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Theme' } },
  { path: 'components/common-ui/theme-preview', component: ThemePreviewPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Preview Theme' } },
  { path: 'components/common-ui/theme-picker', component: ThemePickerPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Theme Picker' } },
  { path: 'components/common-ui/tabs', component: TabsPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Tabs' } },
  { path: 'components/common-ui/menu', component: MenuPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Menu' } },
  { path: 'components/common-ui/footer-nav', component: FooterNavPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Footer Navigation' } },
  { path: 'components/common-ui/aside-nav', component: AsideNavPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Aside Navigation' } },
  { path: 'components/common-ui/toolbar', component: ToolbarPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Toolbar' } },
  { path: 'components/common-ui/pagination', component: PaginationPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Pagination' } },
  { path: 'components/common-ui/toggle', component: TogglePageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Toggle' } },
  { path: 'components/common-ui/layout', component: LayoutPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Layouts' } },
  { path: 'components/common-ui/modal', component: ModalPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Modal' } },
  { path: 'components/common-ui/code-block', component: CodeBlockPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Code Block' } },
  { path: 'components/common-ui/meta', component: MetaPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Meta' } },
  { path: 'components/common-ui/hamburger', component: HamburgerPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Hamburger' } },
]

// CMS Component Routes
export const cmsRoutes = [
  { path: 'components/cms/article', component: ArticlePageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Article' } },
  { path: 'components/cms/article-editor', component: ArticleEditorPageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Article Editor' } },
  { path: 'components/cms/article-list', component: ArticleListPageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Article List' } },
  { path: 'components/cms/content-editor', component: ContentEditorPageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Content Editor' } },
  { path: 'components/cms/category', component: CategoryPageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Category' } },
  { path: 'components/cms/category-editor', component: CategoryEditorPageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Category Editor' } },
];

// Docs Component Routes
export const docsRoutes = [

  { path: 'components/docs/component-info', component: ComponentInfoPageComponent, data: { type: ROUTE_TYPES.components.docs, title: 'Component Info' } },
];

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },

  ...mainRoutes,

  ...commonUiRoutes,

  ...cmsRoutes,

  ...docsRoutes,

];
