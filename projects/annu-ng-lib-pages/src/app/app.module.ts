import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AnnuNgLibModule } from '@annu-ng-lib';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // annu-ng-lib - components modules
    AnnuNgLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
