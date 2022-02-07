import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceInfoComponent } from './service-info.component';
import { TabsModule, CardModule, CodeBlockModule, SearchBoxModule } from '../../common-ui';
import { ComponentPropsModule, ServiceMethodModule } from '..';


@NgModule({
  declarations: [ServiceInfoComponent],
  imports: [
    CommonModule,
    TabsModule,
    CardModule,
    CodeBlockModule,
    SearchBoxModule,
    ServiceMethodModule,
    ComponentPropsModule
  ],
  exports: [ServiceInfoComponent],
})
export class ServiceInfoModule { }
