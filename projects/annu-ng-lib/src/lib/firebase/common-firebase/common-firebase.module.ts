import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonFirebaseService } from './common-firebase.service';
import { AppConfigModule } from '../../app-config';
import { FirestoreParserService } from './firestore-parser.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppConfigModule,
  ],
  providers: [CommonFirebaseService, FirestoreParserService]
})
export class CommonFirebaseModule { }
