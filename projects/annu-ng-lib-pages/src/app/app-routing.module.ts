import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLoggedInGuard } from '@annu/ng-lib';
import { routes } from './app.routes';
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule],
  providers: [IsLoggedInGuard]
})
export class AppRoutingModule { }
