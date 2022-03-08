import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleComponent } from './collapsible.component';
import { CollapsibleHeaderComponent } from './collapsible-header/collapsible-header.component';
import { CollapsibleContentComponent } from './collapsible-content/collapsible-content.component';
import { HamburgerModule } from '../hamburger';
import { DrawerModule } from '../drawer';



@NgModule({
  declarations: [
    CollapsibleComponent,
    CollapsibleHeaderComponent,
    CollapsibleContentComponent
  ],
  imports: [
    CommonModule,
    HamburgerModule,
    DrawerModule,
  ],
  exports: [
    CollapsibleComponent,
    CollapsibleHeaderComponent,
    CollapsibleContentComponent
  ],
})
export class CollapsibleModule { }
