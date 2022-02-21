import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { LoginStatusModule } from './login-status/login-status.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginModule,
    LoginStatusModule
  ]
})
export class AuthModule { }
