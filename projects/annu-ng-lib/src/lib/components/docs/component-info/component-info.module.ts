import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule, CardModule, CodeBlockModule } from '../../common-ui';
import { ComponentInfoComponent } from './component-info.component';


@NgModule({
  declarations: [ComponentInfoComponent],
  imports: [
    CommonModule,
    TabsModule,
    CardModule,
    CodeBlockModule,
  ],
  exports: [ComponentInfoComponent],
})
export class ComponentInfoModule { }
