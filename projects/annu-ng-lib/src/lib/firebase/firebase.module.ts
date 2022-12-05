import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseConfig } from './firebase.interface';
import { LibConfig } from '../app-config/app-config.interface';
import { ArticlesFirebaseModule } from './articles';
import { AuthFirebaseModule } from './auth/auth-firebase.module';
import { ImageStorageModule } from './image-storage/image-storage.module';
import { CommonFirebaseModule, CommonFirebaseService } from './common-firebase';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticlesFirebaseModule,
    AuthFirebaseModule,
    ImageStorageModule,
    CommonFirebaseModule,
  ],
  exports: [
    ArticlesFirebaseModule,
    AuthFirebaseModule,
    ImageStorageModule,
    CommonFirebaseModule,
  ]
})
export class FirebaseModule {
  constructor(private commonFireSvc: CommonFirebaseService, @Optional() @SkipSelf() parentModule?: FirebaseModule) {
    if (parentModule) {
      throw new Error('FirebaseModule is already loaded. Import it in the appModule only');
    } else {
      // initialize firebase
      this.commonFireSvc.initOrGetFirebaseApp();
    }
  }

  static forRoot(firebaseConfig: FirebaseConfig): ModuleWithProviders<FirebaseModule> {
    return {
      ngModule: FirebaseModule,
      providers: [
        { provide: LibConfig, useValue: {firebase: firebaseConfig} }
      ]
    };
  }
}
