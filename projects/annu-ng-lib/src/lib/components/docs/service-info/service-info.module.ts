import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceInfoComponent } from './service-info.component';
import { TabsModule, CardModule, CodeBlockModule, SearchBoxModule, ErrorModule } from '../../common-ui';
import { ComponentPropsModule } from '../component-props';
import { ServiceMethodModule } from '../service-method';


@NgModule({
  declarations: [ServiceInfoComponent],
  imports: [
    CommonModule,
    TabsModule,
    CardModule,
    CodeBlockModule,
    SearchBoxModule,
    ServiceMethodModule,
    ComponentPropsModule,
    ErrorModule,
  ],
  exports: [ServiceInfoComponent],
})
export class ServiceInfoModule { }
