import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ErrorModule } from '../../common-ui';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ErrorModule
  ],
  exports: [
    LoginComponent
  ],
})
export class LoginModule { }
