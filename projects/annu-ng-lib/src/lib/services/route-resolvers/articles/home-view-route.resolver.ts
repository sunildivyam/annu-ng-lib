import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { HomeViewRouteData } from './articles-route-resolvers.interface';

import { ArticlesFirebaseService, QueryConfig } from '../../../firebase';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { Category } from '../../../components/cms';

const DEFAULT_PAGE_SIZE = 5;

@Injectable({
  providedIn: 'root'
})
export class HomeViewRouteResolver implements Resolve<HomeViewRouteData> {

  routeData: HomeViewRouteData = {};

  constructor(private articlesFireSvc: ArticlesFirebaseService, private transferState: TransferState, @Inject(PLATFORM_ID) private platformId) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<HomeViewRouteData> {
    this.routeData = {};
    // create a unique key that holds the route stata data.
    const Home_VIEW_ROUTE_KEY = makeStateKey<HomeViewRouteData>('home-view-route');

    //Check if state data already exists, if yes, serve it from state, and clear the state else, fetch the data and set it to state, that can be used at client side.
    if (this.transferState.hasKey(Home_VIEW_ROUTE_KEY)) {
      this.routeData = this.transferState.get<HomeViewRouteData>(Home_VIEW_ROUTE_KEY, {});
      this.transferState.remove(Home_VIEW_ROUTE_KEY);

      return this.routeData;
    } else {
      await this.loadRouteData();

      if (isPlatformServer(this.platformId)) {
        this.transferState.set(Home_VIEW_ROUTE_KEY, this.routeData);
      }

      return this.routeData;
    }
  }

  private async loadRouteData() {
    try {
      const allCategories = await this.articlesFireSvc.getCategories({ isLive: true, orderField: 'updated' })
      this.routeData.allCategoriesGroups = [];

      await Promise.all(allCategories.map(async (cat: Category) => {
        const queryConfig: QueryConfig = {
          isLive: true,
          articleCategoryId: cat.id,
          orderField: 'updated',
          pageSize: DEFAULT_PAGE_SIZE,
          isNextPages: true,
          startPage: null
        };
        const articles = await this.articlesFireSvc.getArticles(queryConfig);

        this.routeData.allCategoriesGroups.push(
          {
            category: cat,
            articles: articles || []
          });
      }));
    } catch (error: any) {
      this.routeData.errorAllCategoriesGroups = error;
    }
  }
}
