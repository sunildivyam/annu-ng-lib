import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AnnuNgLibModule, FirestoreInterceptor } from '@annu/ng-lib';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import {
  OverviewPageComponent,
  ServicePageComponent,
  ClassPageComponent,
  DirectivePageComponent,
  GuardPageComponent,
  InterfacePageComponent,
  InterceptorPageComponent,
  ComponentPageComponent,
  LibDocsHomePageComponent,
} from './page-components';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,

    // Components Pages
    OverviewPageComponent,
    ServicePageComponent,
    ClassPageComponent,
    DirectivePageComponent,
    GuardPageComponent,
    InterfacePageComponent,
    InterceptorPageComponent,
    ComponentPageComponent,
    LibDocsHomePageComponent,
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FirestoreInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
