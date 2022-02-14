import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginStatusComponent } from './login-status.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginStatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LoginStatusComponent
  ],
})
export class LoginStatusModule { }
