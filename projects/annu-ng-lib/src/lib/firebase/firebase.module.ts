import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseConfig } from './firebase.interface';
import { LibConfig } from '../app-config/app-config.interface';
import { ArticlesFirebaseModule } from './articles';
import { AuthFirebaseModule } from './auth/auth-firebase.module';
import { initializeApp } from 'firebase/app';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticlesFirebaseModule,
    AuthFirebaseModule,
  ],
  exports: [
    ArticlesFirebaseModule,
    AuthFirebaseModule,
  ]
})
export class FirebaseModule {
  constructor(private libConfig: LibConfig, @Optional() @SkipSelf() parentModule?: FirebaseModule) {
    if (parentModule) {
      throw new Error('FirebaseModule is already loaded. Import it in the appModule only');
    } else {
      // initialize firebase
      initializeApp(this.libConfig.firebase);
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
