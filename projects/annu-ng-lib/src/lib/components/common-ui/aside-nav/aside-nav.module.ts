import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavComponent } from './aside-nav.component';
import { RouterModule } from '@angular/router';
import { HamburgerModule } from '../hamburger';
import { AsideNavItemComponent } from './aside-nav-item/aside-nav-item.component';
import { AsideNavHeaderComponent } from './aside-nav-header/aside-nav-header.component';
import { DrawerModule } from '../drawer';



@NgModule({
  declarations: [AsideNavComponent, AsideNavItemComponent, AsideNavHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    HamburgerModule,
    DrawerModule,
  ],
  exports: [AsideNavComponent, AsideNavItemComponent, AsideNavHeaderComponent]
})
export class AsideNavModule { }
