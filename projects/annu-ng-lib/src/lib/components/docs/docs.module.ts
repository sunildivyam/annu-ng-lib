import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule, CardModule, CodeBlockModule, SearchBoxModule } from '../common-ui';
import { DocsService } from './docs.service';
import { ServiceMethodModule } from './service-method';
import { ComponentInfoModule } from './component-info';
import { ComponentPropsModule } from './component-props';
import { ServiceInfoModule } from './service-info';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TabsModule,
    CardModule,
    CodeBlockModule,
    SearchBoxModule,
  ],
  providers: [DocsService],
  exports: [
    ServiceMethodModule,
    ComponentInfoModule,
    ComponentPropsModule,
    ServiceInfoModule,
  ],
})
export class DocsModule { }
