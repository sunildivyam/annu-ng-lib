import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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
