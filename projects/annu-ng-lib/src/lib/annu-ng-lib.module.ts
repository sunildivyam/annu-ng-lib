import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule, TransferState } from '@angular/platform-browser';

import { LibConfig } from './annu-ng-lib.interface';

import { DocsModule } from './components/docs/docs.module';
import { CommonUiModule } from './components/common-ui/common-ui.module';
import { CmsModule } from './components/cms/cms.module';
import { AuthModule } from './components/auth/auth.module';
import { FirebaseModule } from './firebase';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
  ],
  exports: [
    DocsModule,
    CommonUiModule,
    CmsModule,
    FirebaseModule,
    AuthModule,
  ],
  providers: [TransferState]
})
export class AnnuNgLibModule {
  constructor(@Optional() @SkipSelf() parentModule?: AnnuNgLibModule) {
    if (parentModule) {
      throw new Error('AnnuNgLibModule is already loaded. Import it in the appModule only');
    }
  }

  static forRoot(libConfig: LibConfig): ModuleWithProviders<AnnuNgLibModule> {
    return {
      ngModule: AnnuNgLibModule,
      providers: [
        { provide: LibConfig, useValue: libConfig }
      ]
    };
  }
}
