import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleComponent } from './collapsible.component';
import { CollapsibleHeaderComponent } from './collapsible-header/collapsible-header.component';
import { CollapsibleContentComponent } from './collapsible-content/collapsible-content.component';



@NgModule({
  declarations: [
    CollapsibleComponent,
    CollapsibleHeaderComponent,
    CollapsibleContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CollapsibleComponent,
    CollapsibleHeaderComponent,
    CollapsibleContentComponent
  ],
})
export class CollapsibleModule { }
