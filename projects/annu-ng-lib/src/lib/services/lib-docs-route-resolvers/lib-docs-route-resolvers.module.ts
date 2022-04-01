import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibDocsHomeViewRouteResolver } from './lib-docs-home-view-route-resolver/lib-docs-home-view-route.resolver';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LibDocsHomeViewRouteResolver,
  ]
})
export class LibDocsRouteResolversModule { }
