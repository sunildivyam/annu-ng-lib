import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginStatusModule } from '../login-status';
import { ErrorModule } from '../../common-ui';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginStatusModule,
    ErrorModule
  ],
  exports: [
    LoginComponent
  ],
})
export class LoginModule { }
