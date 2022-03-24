import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentUsageComponent } from './component-usage.component';
import { CodeBlockModule } from '../../common-ui/code-block';
import { FormsModule } from '@angular/forms';
import { ToggleModule } from '../../common-ui/toggle';



@NgModule({
  declarations: [
    ComponentUsageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CodeBlockModule,
    ToggleModule
  ],
  exports: [
    ComponentUsageComponent
  ],
})
export class ComponentUsageModule { }
