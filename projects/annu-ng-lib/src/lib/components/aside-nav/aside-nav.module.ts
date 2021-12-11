import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavComponent } from './aside-nav.component';
import { RouterModule } from '@angular/router';
import { HamburgerModule } from '../hamburger';



@NgModule({
  declarations: [AsideNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    HamburgerModule,
  ],
  exports: [AsideNavComponent]
})
export class AsideNavModule { }
