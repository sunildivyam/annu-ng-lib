import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceInfoComponent } from './service-info.component';
import { TabsModule, CardModule, CodeBlockModule, SearchBoxModule } from '../../common-ui';


@NgModule({
  declarations: [ServiceInfoComponent],
  imports: [
    CommonModule,
    TabsModule,
    CardModule,
    CodeBlockModule,
    SearchBoxModule,
  ],
  exports: [ServiceInfoComponent],
})
export class ServiceInfoModule { }
