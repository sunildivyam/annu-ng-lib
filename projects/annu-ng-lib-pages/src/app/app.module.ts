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


@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    // annu-ng-lib - components modules
    AnnuNgLibModule.forRoot({ docsConfig: environment.libConfig}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
