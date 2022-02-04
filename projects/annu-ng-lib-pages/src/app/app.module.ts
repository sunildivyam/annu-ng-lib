import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AnnuNgLibModule } from '@annu-ng-lib';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import {
  ThemePickerPageComponent,
  CardPageComponent,
  ThemePageComponent,
  ColorPalettePageComponent,
  OverviewPageComponent,
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

} from './page-components';
import { UtilsServicePageComponent } from './page-services/utils-service-page/utils-service-page.component';
import { ContentEditorServicePageComponent } from './page-services/content-editor-service-page/content-editor-service-page.component';
import { DocsServicePageComponent } from './page-services/docs-service-page/docs-service-page.component';
import { HighlightServicePageComponent } from './page-services/highlight-service-page/highlight-service-page.component';
import { MetaServicePageComponent } from './page-services/meta-service-page/meta-service-page.component';
import { SelectionServicePageComponent } from './page-services/selection-service-page/selection-service-page.component';
import { ThemeServicePageComponent } from './page-services/theme-service-page/theme-service-page.component';


@NgModule({
  declarations: [
    AppComponent,

    // Components Pages
    ThemePickerPageComponent,
    CardPageComponent,
    ThemePageComponent,
    ColorPalettePageComponent,
    OverviewPageComponent,
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

    // Service Pages
    UtilsServicePageComponent,
    ContentEditorServicePageComponent,
    DocsServicePageComponent,
    HighlightServicePageComponent,
    MetaServicePageComponent,
    SelectionServicePageComponent,
    ThemeServicePageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    // annu-ng-lib - components modules
    AnnuNgLibModule.forRoot({ docsConfig: environment.libConfig }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
