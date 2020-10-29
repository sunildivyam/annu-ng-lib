import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnnuNgLibModule } from '../../.././projects/annu-ng-lib/src/lib/annu-ng-lib.module'; // '@annu/ng-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemePickerPageComponent } from './page-components/theme-picker-page/theme-picker-page.component';
import { CardPageComponent } from './page-components/card-page/card-page.component';
import { ThemePageComponent } from './page-components/theme-page/theme-page.component';
import { ColorPalettePageComponent } from './page-components/color-palette-page/color-palette-page.component';
import { OverviewPageComponent } from './page-components/overview-page/overview-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemePickerPageComponent,
    CardPageComponent,
    ThemePageComponent,
    ColorPalettePageComponent,
    OverviewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnnuNgLibModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
