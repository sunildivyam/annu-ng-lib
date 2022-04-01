import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterceptorInfoComponent } from './interceptor-info.component';
import { CodeBlockModule, ErrorModule, SpinnerModule, TabsModule } from '../../common-ui';
import { ComponentPropsModule } from '../component-props/component-props.module';


@NgModule({
  declarations: [
    InterceptorInfoComponent
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
    InterceptorInfoComponent
  ],
})
export class InterceptorInfoModule { }
