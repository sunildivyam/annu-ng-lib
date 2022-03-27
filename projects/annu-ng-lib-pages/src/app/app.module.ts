import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AnnuNgLibModule } from '@annu/ng-lib';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import {
  OverviewPageComponent,
  ServicePageComponent,
  ComponentPageComponent,
} from './page-components';


@NgModule({
  declarations: [
    AppComponent,

    // Components Pages
    OverviewPageComponent,
    ServicePageComponent,
    ComponentPageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    // annu-ng-lib - this imports all lib modules
    AnnuNgLibModule.forRoot(environment.libConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
