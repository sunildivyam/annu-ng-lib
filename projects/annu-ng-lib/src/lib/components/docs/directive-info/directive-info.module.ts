import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveInfoComponent } from './directive-info.component';
import { CodeBlockModule, ErrorModule, SpinnerModule, TabsModule } from '../../common-ui';
import { ComponentPropsModule } from '../component-props/component-props.module';


@NgModule({
  declarations: [
    DirectiveInfoComponent
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
    DirectiveInfoComponent
  ],
})
export class DirectiveInfoModule { }
