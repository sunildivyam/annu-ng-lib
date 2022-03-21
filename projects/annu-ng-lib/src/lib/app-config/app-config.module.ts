import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibConfig } from './app-config.interface';


/**
 * Responsible for adding Library configuration as a provider in the root,
 * so that all library modules can use it, if needed. This module should be imported in App module with .forRoot().
 * @date 17/3/2022 - 7:58:51 pm
 *
 * @export
 * @class AppConfigModule
 * @typedef {AppConfigModule}
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
})
export class AppConfigModule {
  constructor(@Optional() @SkipSelf() parentModule?: AppConfigModule) {
    if (parentModule) {
      throw new Error('AppConfigModule is already loaded. Import it in the appModule only');
    }
  }

  static forRoot(libConfig: LibConfig): ModuleWithProviders<AppConfigModule> {
    return {
      ngModule: AppConfigModule,
      providers: [
        { provide: LibConfig, useValue: libConfig }
      ]
    };
  }
}
