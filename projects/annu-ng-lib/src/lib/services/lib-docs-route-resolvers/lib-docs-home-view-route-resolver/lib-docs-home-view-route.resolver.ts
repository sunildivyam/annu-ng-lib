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
    console.log(this.LOGS_MODULE_NAME, ' *** Is SERVER: ', isPlatformServer(this.platformId))
    this.routeData = {};
    // create a unique key that holds the route stata data.
    const HOME_VIEW_ROUTE_KEY = makeStateKey<LibDocsHomeViewRouteData>('lib-docs-home-view-route');

    //Check if state data already exists, if yes, serve it from state, and clear the state else, fetch the data and set it to state, that can be used at client side.
    if (this.transferState.hasKey(HOME_VIEW_ROUTE_KEY)) {
      console.log(this.LOGS_MODULE_NAME, ' *** - READING TRASFER STATE - START')
      this.routeData = this.transferState.get<LibDocsHomeViewRouteData>(HOME_VIEW_ROUTE_KEY, {});
      console.log(this.LOGS_MODULE_NAME, ' *** - READING TRASFER STATE - END')
      this.transferState.remove(HOME_VIEW_ROUTE_KEY);
      console.log(this.LOGS_MODULE_NAME, ' *** - TRASFER STATE - REMOVED')
      return this.routeData;
    } else {
      console.log(this.LOGS_MODULE_NAME, ' *** - READING DOCs JSON - START')
      await this.loadRouteData();
      console.log(this.LOGS_MODULE_NAME, ' *** - READING DOCs JSON - END')
      if (isPlatformServer(this.platformId)) {
        console.log(this.LOGS_MODULE_NAME, ' *** - SAVING TRANSFER STATE - START')
        this.transferState.set(HOME_VIEW_ROUTE_KEY, this.routeData);
        console.log(this.LOGS_MODULE_NAME, ' *** - SAVING TRANSFER STATE - END')
      }
      console.log(this.LOGS_MODULE_NAME, ' *** - READING TRASFER STATE - END')
      return this.routeData;
    }
  }

  private async loadRouteData() {
    try {
      console.log(this.LOGS_MODULE_NAME, ' *** - READING ALL CATEGORIES - START')
      this.routeData.libDocsInfo = await this.docsService.getLibDocsInfo();
      console.log(this.LOGS_MODULE_NAME, ' *** - READING ALL CATEGORIES - END')
    } catch (error: any) {
      this.routeData.libDocsInfo = null;
      this.routeData.libDocsInfoError = error;
    }
  }
}
