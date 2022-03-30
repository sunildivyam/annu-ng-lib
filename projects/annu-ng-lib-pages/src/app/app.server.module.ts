import { Inject, NgModule } from '@angular/core';
import { INITIAL_CONFIG, PlatformConfig, ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,    // Needed to transfer state from SSR to client
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {

  /**
   * useAbsoluteUrl = true is needed to enable relative Urls for APIs on server side rendering. Normally SSR requires all urls to be absolute.
   * @date 30/3/2022 - 9:29:56 pm
   *
   * @constructor
   * @param {PlatformConfig} config
   */
  constructor(@Inject(INITIAL_CONFIG) private config: PlatformConfig) {
    this.config.useAbsoluteUrl = true;
  }
}
