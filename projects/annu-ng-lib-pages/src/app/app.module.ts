import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AnnuNgLibModule, CardModule, ColorPaletteModule, TabsModule, ThemeModule, ThemePickerModule} from '@annu-ng-lib';

import { AppComponent } from './app.component';
import { ThemePickerPageComponent } from './page-components/theme-picker-page/theme-picker-page.component';
import { CardPageComponent } from './page-components/card-page/card-page.component';
import { ThemePageComponent } from './page-components/theme-page/theme-page.component';
import { ColorPalettePageComponent } from './page-components/color-palette-page/color-palette-page.component';
import { OverviewPageComponent } from './page-components/overview-page/overview-page.component';
import { TabsPageComponent } from './page-components/tabs-page/tabs-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemePickerPageComponent,
    CardPageComponent,
    ThemePageComponent,
    ColorPalettePageComponent,
    OverviewPageComponent,
    TabsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // annu-ng-lib - components modules
    AnnuNgLibModule,  // main module
    // CardModule,
    // ThemeModule,
    // ColorPaletteModule,
    // TabsModule,
    // ThemePickerModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
