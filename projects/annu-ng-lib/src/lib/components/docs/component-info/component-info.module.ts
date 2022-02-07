import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule, CardModule, CodeBlockModule } from '../../common-ui';
import { ComponentInfoComponent } from './component-info.component';
import { ComponentPropsModule } from '../component-props';


@NgModule({
  declarations: [ComponentInfoComponent],
  imports: [
    CommonModule,
    TabsModule,
    CardModule,
    CodeBlockModule,
    ComponentPropsModule
  ],
  exports: [ComponentInfoComponent],
})
export class ComponentInfoModule { }
