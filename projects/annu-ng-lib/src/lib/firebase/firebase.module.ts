import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseConfig } from './firebase.interface';
import { ArticlesFirebaseModule } from './articles';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticlesFirebaseModule,
  ]
})
export class FirebaseModule {
  constructor(@Optional() @SkipSelf() parentModule?: FirebaseModule) {
    if (parentModule) {
      throw new Error('FirebaseModule is already loaded. Import it in the appModule only');
    }
  }

  static forRoot(firebaseConfig: FirebaseConfig): ModuleWithProviders<FirebaseModule> {
    return {
      ngModule: FirebaseModule,
      providers: [
        { provide: FirebaseConfig, useValue: firebaseConfig }
      ]
    };
  }
}
