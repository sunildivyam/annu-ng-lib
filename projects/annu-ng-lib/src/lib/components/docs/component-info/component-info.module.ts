import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from '../../common-ui/tabs';
import { CardModule } from '../../common-ui/card';
import { CodeBlockModule } from '../../common-ui/code-block';
import { ComponentInfoComponent } from './component-info.component';
import { ComponentPropsModule } from '../component-props';
import { FormsModule } from '@angular/forms';
import { ComponentUsageModule } from '../component-usage';
import { ErrorModule } from '../../common-ui/error';


@NgModule({
  declarations: [ComponentInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    CardModule,
    CodeBlockModule,
    ErrorModule,
    ComponentPropsModule,
    ComponentUsageModule,
  ],
  exports: [ComponentInfoComponent],
})
export class ComponentInfoModule { }
