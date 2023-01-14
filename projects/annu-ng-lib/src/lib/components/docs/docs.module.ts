import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DocsService } from './docs.service';
import { ServiceMethodModule } from './service-method';
import { ComponentInfoModule } from './component-info';
import { ComponentPropsModule } from './component-props';
import { ServiceInfoModule } from './service-info';
import { ComponentUsageModule } from './component-usage/component-usage.module';
import { InterfaceInfoModule } from './interface-info/interface-info.module';
import { GuardInfoModule } from './guard-info/guard-info.module';
import { InterceptorInfoModule } from './interceptor-info/interceptor-info.module';
import { ClassInfoModule } from './class-info/class-info.module';
import { DirectiveInfoModule } from './directive-info/directive-info.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    DocsService,
  ],
  exports: [
    ServiceMethodModule,
    ComponentInfoModule,
    ComponentPropsModule,
    ServiceInfoModule,
    ComponentUsageModule,
    InterfaceInfoModule,
    GuardInfoModule,
    InterceptorInfoModule,
    ClassInfoModule,
    DirectiveInfoModule,
  ],
})
export class DocsModule { }
