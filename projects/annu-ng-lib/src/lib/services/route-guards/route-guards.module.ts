import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoggedInGuard } from './is-logged-in.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [IsLoggedInGuard],
})
export class RouteGuardsModule { }
