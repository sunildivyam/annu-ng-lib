import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceInfoComponent } from './service-info.component';



@NgModule({
  declarations: [ServiceInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [ServiceInfoComponent],
})
export class ServiceInfoModule { }
