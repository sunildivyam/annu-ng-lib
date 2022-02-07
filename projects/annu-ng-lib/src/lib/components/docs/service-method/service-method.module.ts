import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceMethodComponent } from './service-method.component';
import { CardModule } from '../../common-ui';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ServiceMethodComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
  ],
  exports: [
    ServiceMethodComponent
  ]
})
export class ServiceMethodModule { }
