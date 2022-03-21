import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from '../../common-ui/tabs';
import { CardModule } from '../../common-ui/card';
import { CodeBlockModule } from '../../common-ui/code-block';
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
