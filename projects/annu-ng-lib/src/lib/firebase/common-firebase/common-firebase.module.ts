import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonFirebaseService } from './common-firebase.service';
import { AppConfigModule } from '../../app-config';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppConfigModule,
  ],
  providers: [CommonFirebaseService]
})
export class CommonFirebaseModule { }
