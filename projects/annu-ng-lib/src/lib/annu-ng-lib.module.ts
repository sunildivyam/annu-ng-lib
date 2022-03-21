import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LibConfig } from './app-config/app-config.interface';

import { DocsModule } from './components/docs/docs.module';
import { CommonUiModule } from './components/common-ui/common-ui.module';
import { CmsModule } from './components/cms/cms.module';
import { AuthModule } from './components/auth/auth.module';
import { FirebaseModule } from './firebase';
import { AppConfigModule } from './app-config';
import { RouteGuardsModule } from './services/route-guards/route-guards.module';
import { ArticlesRouteResolversModule } from './services/articles-route-resolvers';
import { UtilsModule } from './services/utils';


const libMoudlesToImportAndExport = [
  AppConfigModule,

  RouteGuardsModule,
  ArticlesRouteResolversModule,
  UtilsModule,

  DocsModule,
  CommonUiModule,
  CmsModule,
  AuthModule,

  FirebaseModule,

];


/**
 * Consumer App should import this main library module, if all the modules are needed alltogether in the app.
 * Else importing individual modules from the library, is recommended.
 * @date 17/3/2022 - 8:05:44 pm
 *
 * @export
 * @class AnnuNgLibModule
 * @typedef {AnnuNgLibModule}
 */
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ...libMoudlesToImportAndExport,
  ],
  exports: [
    ...libMoudlesToImportAndExport,
  ]
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
