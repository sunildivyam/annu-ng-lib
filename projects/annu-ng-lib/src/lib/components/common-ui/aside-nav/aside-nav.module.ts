import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavComponent } from './aside-nav.component';
import { RouterModule } from '@angular/router';
import { HamburgerModule } from '../hamburger';
import { AsideNavItemComponent } from './aside-nav-item/aside-nav-item.component';



@NgModule({
  declarations: [AsideNavComponent, AsideNavItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    HamburgerModule,
  ],
  exports: [AsideNavComponent, AsideNavItemComponent]
})
export class AsideNavModule { }
