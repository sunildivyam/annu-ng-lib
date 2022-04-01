import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { CategoryViewRouteData, ArticlesHomeViewRouteData } from '../articles-route-resolvers.interface';

import { ArticlesFirebaseService, QueryConfig } from '../../../firebase';
import { CategoryGroup } from '../../../components/cms';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

import { ARTICLES_ROUTE_RESOLVER_DATA_KEYS } from '../articles-route-resolvers.constants';

const DEFAULT_PAGE_SIZE = 5;

/**
* Category view data resolver.
 * This requires BrowserTransferStateModule to be imported in app module and
 * ServerTransferStateModule in to the server.app module.
 * @date 15/3/2022 - 10:51:12 pm
 *
 * @export
 * @class CategoryViewRouteResolver
 * @typedef {CategoryViewRouteResolver}
 * @implements {Resolve<CategoryViewRouteData>}
 */
@Injectable()
export class CategoryViewRouteResolver implements Resolve<CategoryViewRouteData> {

  routeData: CategoryViewRouteData = {};

  constructor(private articlesFireSvc: ArticlesFirebaseService, private transferState: TransferState, @Inject(PLATFORM_ID) private platformId) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<CategoryViewRouteData> {
    this.routeData = {};
    const categoryId = route.params['categoryId'];
    // create a unique key that holds the route stata data.
    const CATEGORY_VIEW_ROUTE_KEY = makeStateKey<CategoryViewRouteData>('category-view-route-' + categoryId);

    //Check if state data already exists, if yes, serve it from state, and clear the state else, fetch the data and set it to state, that can be used at client side.
    if (this.transferState.hasKey(CATEGORY_VIEW_ROUTE_KEY)) {
      this.routeData = this.transferState.get<CategoryViewRouteData>(CATEGORY_VIEW_ROUTE_KEY, {});
      this.transferState.remove(CATEGORY_VIEW_ROUTE_KEY);

      return this.routeData;
    } else {
      // populate some of the data that is already available on parent route.
      const parentRouteData: ArticlesHomeViewRouteData = route.parent.data[ARTICLES_ROUTE_RESOLVER_DATA_KEYS.ARTICLES_HOME_VIEW];
      this.routeData = {
        allCategoriesGroups: parentRouteData.allCategoriesGroups,
        errorAllCategoriesGroups: parentRouteData.errorAllCategoriesGroups
      };

      // check if route category already exist in parent data, else fetch it from backend
      const foundCategoryGrp = parentRouteData.allCategoriesGroups.find((catGroup: CategoryGroup) => catGroup.category.id === categoryId);
      if (foundCategoryGrp) {
        this.routeData.categoryGroup = foundCategoryGrp;
        this.routeData.errorCategoryGroup = parentRouteData.errorAllCategoriesGroups;
      } else {
        await this.getCategory(categoryId);
        // if this has child routes (article view route), then current category Articles are not needed, else we need to fetch from backend.
        if (!route.firstChild) await this.getCategoryArticles(categoryId, route?.data?.pageSize || DEFAULT_PAGE_SIZE);
      }

      if (isPlatformServer(this.platformId)) {
        this.transferState.set(CATEGORY_VIEW_ROUTE_KEY, this.routeData);
      }

      return this.routeData;
    }
  }

  private async getCategory(categoryId: string) {
    this.routeData.categoryGroup = this.routeData.categoryGroup || {};
    this.routeData.errorCategoryGroup = null;

    try {
      const queryConfig: QueryConfig = {
        id: categoryId,
        isLive: true,
      };
      const cats = await this.articlesFireSvc.getCategories(queryConfig);
      if (cats && cats.length) {
        this.routeData.categoryGroup.category = cats[0];
      } else {
        this.routeData.errorCategoryGroup = { code: '404', message: `Page does not exist - ${categoryId}` }
      }

    } catch (error: any) {
      this.routeData.categoryGroup = null;
      this.routeData.errorCategoryGroup = error;
    }
  }

  private async getCategoryArticles(categoryId: string, pageSize: number) {
    this.routeData.categoryGroup = this.routeData.categoryGroup || {};

    try {
      const queryConfig: QueryConfig = {
        isLive: true,
        articleCategoryId: categoryId,
        orderField: 'updated',
        pageSize: pageSize,
        startPage: null,
      };

      this.routeData.categoryGroup.articles = await this.articlesFireSvc.getArticles(queryConfig);
    } catch (error: any) {
      this.routeData.errorCategoryGroup = error;
      this.routeData.categoryGroup.articles = [];
    }
  }
}
