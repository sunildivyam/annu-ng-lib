import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginStatusComponent } from './login-status.component';
import { RouterModule } from '@angular/router';
import { SpinnerModule } from '../../common-ui/spinner';
import { FirebaseModule } from '../../../firebase';


@NgModule({
  declarations: [
    LoginStatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SpinnerModule,
    FirebaseModule,
  ],
  exports: [
    LoginStatusComponent
  ],
})
export class LoginStatusModule { }
