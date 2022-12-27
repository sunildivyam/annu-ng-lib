import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { LibDocsHomeViewRouteData } from '../lib-docs-route-resolvers.interface';

import { DocsService } from '../../../components/docs';

/**
 * Lib Docs Home view data resolver.
 * This requires BrowserTransferStateModule to be imported in app module and
 * ServerTransferStateModule in to the server.app module.
 * @date 15/3/2022 - 10:48:34 pm
 *
 * @export
 * @class LibDocsHomeViewRouteResolver
 * @typedef {LibDocsHomeViewRouteResolver}
 * @implements {Resolve<LibDocsHomeViewRouteData>}
 */
@Injectable()
export class LibDocsHomeViewRouteResolver implements Resolve<LibDocsHomeViewRouteData> {

  routeData: LibDocsHomeViewRouteData = {};
  LOGS_MODULE_NAME: string = LibDocsHomeViewRouteResolver.name;

  constructor(private docsService: DocsService, private transferState: TransferState, @Inject(PLATFORM_ID) private platformId) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<LibDocsHomeViewRouteData> {
    this.routeData = {};
    // create a unique key that holds the route stata data.
    const HOME_VIEW_ROUTE_KEY = makeStateKey<LibDocsHomeViewRouteData>('lib-docs-home-view-route');

    //Check if state data already exists, if yes, serve it from state, and clear the state else, fetch the data and set it to state, that can be used at client side.
    if (this.transferState.hasKey(HOME_VIEW_ROUTE_KEY)) {
      this.routeData = this.transferState.get<LibDocsHomeViewRouteData>(HOME_VIEW_ROUTE_KEY, {});
      this.transferState.remove(HOME_VIEW_ROUTE_KEY);
      return this.routeData;
    } else {
      await this.loadRouteData();
      if (isPlatformServer(this.platformId)) {
        this.transferState.set(HOME_VIEW_ROUTE_KEY, this.routeData);
      }
      return this.routeData;
    }
  }

  private async loadRouteData() {
    try {
      this.routeData.libDocsInfo = await this.docsService.getLibDocsInfo();
    } catch (error: any) {
      this.routeData.libDocsInfo = null;
      this.routeData.libDocsInfoError = error;
    }
  }
}
