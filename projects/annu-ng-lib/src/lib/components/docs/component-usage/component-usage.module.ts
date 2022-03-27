import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentUsageComponent } from './component-usage.component';
import { CodeBlockModule } from '../../common-ui/code-block';
import { FormsModule } from '@angular/forms';
import { ToggleModule } from '../../common-ui/toggle';
import { CollapsibleModule } from '../../common-ui/collapsible';



@NgModule({
  declarations: [
    ComponentUsageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CodeBlockModule,
    ToggleModule,
    CollapsibleModule
  ],
  exports: [
    ComponentUsageComponent
  ],
})
export class ComponentUsageModule { }
