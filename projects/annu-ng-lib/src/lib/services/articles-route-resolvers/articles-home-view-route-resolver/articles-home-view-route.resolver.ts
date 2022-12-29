import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ArticlesHomeViewRouteData } from '../articles-route-resolvers.interface';

import { ArticlesFirebaseService, QueryConfig } from '../../../firebase';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { Category } from '../../../components/cms';

const DEFAULT_PAGE_SIZE = 5;

/**
 * Articles Home view data resolver.
 * This requires BrowserTransferStateModule to be imported in app module and
 * ServerTransferStateModule in to the server.app module.
 * @date 15/3/2022 - 10:48:34 pm
 *
 * @export
 * @class ArticlesHomeViewRouteResolver
 * @typedef {ArticlesHomeViewRouteResolver}
 * @implements {Resolve<ArticlesHomeViewRouteData>}
 */
@Injectable()
export class ArticlesHomeViewRouteResolver implements Resolve<ArticlesHomeViewRouteData> {

  routeData: ArticlesHomeViewRouteData = {};
  LOGS_MODULE_NAME: string = ArticlesHomeViewRouteResolver.name;
  pageSize: number = DEFAULT_PAGE_SIZE;

  constructor(private articlesFireSvc: ArticlesFirebaseService, private transferState: TransferState, @Inject(PLATFORM_ID) private platformId) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ArticlesHomeViewRouteData> {
    this.routeData = {};
    this.pageSize = route?.data?.pageSize || DEFAULT_PAGE_SIZE;

    // create a unique key that holds the route stata data.
    const HOME_VIEW_ROUTE_KEY = makeStateKey<ArticlesHomeViewRouteData>('articles-home-view-route');

    //Check if state data already exists, if yes, serve it from state, and clear the state else, fetch the data and set it to state, that can be used at client side.
    if (this.transferState.hasKey(HOME_VIEW_ROUTE_KEY)) {
      this.routeData = this.transferState.get<ArticlesHomeViewRouteData>(HOME_VIEW_ROUTE_KEY, {});
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
      const allCategories = await this.articlesFireSvc.getCategories({ isLive: true, orderField: 'updated', isDesc: false })
      this.routeData.allCategoriesGroups = [];
      const catArticles = await Promise.all(allCategories.map(async (cat: Category) => {
        const queryConfig: QueryConfig = {
          isLive: true,
          articleCategoryId: cat.id,
          orderField: 'updated',
          pageSize: this.pageSize,
          isForwardDir: true,
          startPage: null,
          isDesc: true,
        };
        return this.articlesFireSvc.getArticles(queryConfig);
      }));

      allCategories.forEach((cat, index) => {
        this.routeData.allCategoriesGroups.push(
          {
            category: cat,
            articles: catArticles[index] || []
          });
      })
    } catch (error: any) {
      this.routeData.errorAllCategoriesGroups = error;
    }
  }
}
