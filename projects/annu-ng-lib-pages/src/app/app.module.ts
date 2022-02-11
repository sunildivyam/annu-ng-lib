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
  ServiceInfoPageComponent,
  SearchBoxPageComponent,
  ComponentPropsPageComponent,
  ServiceMethodPageComponent,

} from './page-components';

import {
  UtilsServicePageComponent,
  ContentEditorServicePageComponent,
  DocsServicePageComponent,
  HighlightServicePageComponent,
  MetaServicePageComponent,
  SelectionServicePageComponent,
  ThemeServicePageComponent,
} from './page-services';


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
    ServiceInfoPageComponent,
    SearchBoxPageComponent,
    ComponentPropsPageComponent,
    ServiceMethodPageComponent,

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
    AnnuNgLibModule.forRoot(environment.libConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
