import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceInfoComponent } from './interface-info.component';
import { CodeBlockModule, ErrorModule, SpinnerModule, TabsModule } from '../../common-ui';
import { ComponentPropsModule } from '../component-props/component-props.module';


@NgModule({
  declarations: [
    InterfaceInfoComponent
  ],
  imports: [
    CommonModule,
    TabsModule,
    SpinnerModule,
    ErrorModule,
    CodeBlockModule,
    ComponentPropsModule,
  ],
  exports: [
    InterfaceInfoComponent
  ],
})
export class InterfaceInfoModule { }
