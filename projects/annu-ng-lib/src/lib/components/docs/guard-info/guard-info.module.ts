import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardInfoComponent } from './guard-info.component';

import { CodeBlockModule, ErrorModule, SpinnerModule, TabsModule } from '../../common-ui';
import { ComponentPropsModule } from '../component-props/component-props.module';


@NgModule({
  declarations: [
    GuardInfoComponent
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
    GuardInfoComponent
  ],
})
export class GuardInfoModule { }
