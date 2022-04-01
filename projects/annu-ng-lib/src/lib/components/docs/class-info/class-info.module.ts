import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassInfoComponent } from './class-info.component';
import { CodeBlockModule, ErrorModule, SpinnerModule, TabsModule } from '../../common-ui';
import { ComponentPropsModule } from '../component-props/component-props.module';



@NgModule({
  declarations: [
    ClassInfoComponent
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
    ClassInfoComponent
  ],
})
export class ClassInfoModule { }
