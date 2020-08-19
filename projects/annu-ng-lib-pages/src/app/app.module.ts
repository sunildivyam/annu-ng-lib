import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnnuNgLibModule } from 'annu-ng-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnnuNgLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
