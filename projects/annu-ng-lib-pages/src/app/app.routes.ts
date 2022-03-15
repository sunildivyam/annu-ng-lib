import { Routes } from '@angular/router';
import { IsLoggedInGuard } from '@annu/ng-lib';
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
  SpinnerPageComponent,
  ServiceInfoPageComponent,
  SearchBoxPageComponent,
  ComponentPropsPageComponent,
  ServiceMethodPageComponent,
  ErrorPageComponent,
  LoginPageComponent,
  LoginStatusPageComponent,
  CollapsiblePageComponent,
  MultiSelectBoxPageComponent,
  ArticleViewPageComponent,
  DrawerPageComponent,
  CategoryArticlesListPageComponent,
} from './page-components';

// Services from Lib
import {
  UtilsServicePageComponent,
  ContentEditorServicePageComponent,
  DocsServicePageComponent,
  HighlightServicePageComponent,
  MetaServicePageComponent,
  SelectionServicePageComponent,
  ThemeServicePageComponent,
  ArticlesFirebaseServicePageComponent,
  AuthFirebaseServicePageComponent,
} from './page-services';


// Main Nav Routes
export const mainRoutes = [
  { path: 'overview', component: OverviewPageComponent, data: { type: ROUTE_TYPES.main, title: 'Getting Started' } /*, canActivate: [IsLoggedInGuard] */ },
  { path: 'documentation', component: OverviewPageComponent, data: { type: ROUTE_TYPES.main, title: 'Documentation' } },
  { path: 'contact-us', component: OverviewPageComponent, data: { type: ROUTE_TYPES.main, title: 'Contact Us' } },
]

// Auth Component Routes
export const authRoutes = [
  { path: 'components/auth/login', component: LoginPageComponent, data: { type: ROUTE_TYPES.components.auth, title: 'Login' } },
  { path: 'components/auth/login-status', component: LoginStatusPageComponent, data: { type: ROUTE_TYPES.components.auth, title: 'Login Status' } },
]

// Common UI Component Routes
export const commonUiRoutes = [
  { path: 'components/common-ui/card', component: CardPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Card' }},
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
  { path: 'components/common-ui/spinner', component: SpinnerPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Spinner' } },
  { path: 'components/common-ui/search-box', component: SearchBoxPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'SearchBox' } },
  { path: 'components/common-ui/error', component: ErrorPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Error' } },
  { path: 'components/common-ui/collapsible', component: CollapsiblePageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Collapsible' } },
  { path: 'components/common-ui/multi-select-box', component: MultiSelectBoxPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Multi Select Box' } },
  { path: 'components/common-ui/drawer', component: DrawerPageComponent, data: { type: ROUTE_TYPES.components.commonUi, title: 'Drawer' } },
]

// CMS Component Routes
export const cmsRoutes = [
  { path: 'components/cms/article', component: ArticlePageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Article' } },
  { path: 'components/cms/article-editor', component: ArticleEditorPageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Article Editor' } },
  { path: 'components/cms/article-list', component: ArticleListPageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Article List' } },
  { path: 'components/cms/content-editor', component: ContentEditorPageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Content Editor' } },
  { path: 'components/cms/category', component: CategoryPageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Category' } },
  { path: 'components/cms/category-editor', component: CategoryEditorPageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Category Editor' } },
  { path: 'components/cms/article-view', component: ArticleViewPageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Article View' } },
  { path: 'components/cms/category-articles-list', component: CategoryArticlesListPageComponent, data: { type: ROUTE_TYPES.components.cms, title: 'Category Articles List' } },
];

// Docs Component Routes
export const docsRoutes = [
  { path: 'components/docs/component-info', component: ComponentInfoPageComponent, data: { type: ROUTE_TYPES.components.docs, title: 'Component Info' } },
  { path: 'components/docs/service-info', component: ServiceInfoPageComponent, data: { type: ROUTE_TYPES.components.docs, title: 'Service Info' } },
  { path: 'components/docs/component-props', component: ComponentPropsPageComponent, data: { type: ROUTE_TYPES.components.docs, title: 'Component Properties' } },
  { path: 'components/docs/service-method', component: ServiceMethodPageComponent, data: { type: ROUTE_TYPES.components.docs, title: 'Service Method' } },
];


// App Services Routes
export const appSvcRoutes = [
  { path: 'services/app/utils', component: UtilsServicePageComponent, data: { type: ROUTE_TYPES.services.app, title: 'Utils Service' } },
]

// Common UI Services Routes
export const commonUiSvcRoutes = [
  { path: 'services/common-ui/highlight', component: HighlightServicePageComponent, data: { type: ROUTE_TYPES.services.commonUi, title: 'Highlight Service' } },
  { path: 'services/common-ui/meta', component: MetaServicePageComponent, data: { type: ROUTE_TYPES.services.commonUi, title: 'Meta Service' } },
  { path: 'services/common-ui/theme', component: ThemeServicePageComponent, data: { type: ROUTE_TYPES.services.commonUi, title: 'Theme Service' } },
]

// CMS Services Routes
export const cmsSvcRoutes = [
  { path: 'services/cms/content-editor', component: ContentEditorServicePageComponent, data: { type: ROUTE_TYPES.services.cms, title: 'ContentEditor Service' } },
  { path: 'services/cms/selection', component: SelectionServicePageComponent, data: { type: ROUTE_TYPES.services.cms, title: 'Selection Service' } },
];

// Docs Services Routes
export const docsSvcRoutes = [
  { path: 'services/docs/docs', component: DocsServicePageComponent, data: { type: ROUTE_TYPES.services.docs, title: 'Docs Service' } },
];

// Firebase Services Routes
export const firebaseSvcRoutes = [
  { path: 'services/firebase/articles-firebase', component: ArticlesFirebaseServicePageComponent, data: { type: ROUTE_TYPES.services.firebase, title: 'ArticlesFirebase Service' } },
  { path: 'services/firebase/auth-firebase', component: AuthFirebaseServicePageComponent, data: { type: ROUTE_TYPES.services.firebase, title: 'AuthFirebase Service' } },
];

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  // Main Routes
  ...mainRoutes,

  // Components Routes
  ...commonUiRoutes,

  ...cmsRoutes,

  ...docsRoutes,

  ...authRoutes,

  // Services Routes
  ...appSvcRoutes,

  ...commonUiSvcRoutes,

  ...cmsSvcRoutes,

  ...docsSvcRoutes,

  ...firebaseSvcRoutes,
];
