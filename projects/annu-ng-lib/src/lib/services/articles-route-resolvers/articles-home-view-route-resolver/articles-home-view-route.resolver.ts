import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ArticlesHomeViewRouteData } from '../articles-route-resolvers.interface';

import { ArticlesFirebaseHttpService, QueryConfig, StructuredQueryValueType } from '../../../firebase';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { Category, CategoryGroup } from '../../../components/cms';
import { from, map, Observable, of, tap } from 'rxjs';

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
  pageSize: number = DEFAULT_PAGE_SIZE;

  constructor(private articlesFireHttp: ArticlesFirebaseHttpService, private transferState: TransferState, @Inject(PLATFORM_ID) private platformId) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ArticlesHomeViewRouteData> {

    this.pageSize = route?.data?.pageSize || DEFAULT_PAGE_SIZE;

    // create a unique key that holds the route stata data.
    const HOME_VIEW_ROUTE_KEY = makeStateKey<ArticlesHomeViewRouteData>('articles-home-view-route');

    //Check if state data already exists, if yes, serve it from state, and clear the state else, fetch the data and set it to state, that can be used at client side.
    if (this.transferState.hasKey(HOME_VIEW_ROUTE_KEY)) {
      const routeData = this.transferState.get<ArticlesHomeViewRouteData>(HOME_VIEW_ROUTE_KEY, {});
      this.transferState.remove(HOME_VIEW_ROUTE_KEY);
      return of(routeData);

    } else {
      // Fetch the fresh data and set the new transferState for mext use.
      return this.loadRouteData(HOME_VIEW_ROUTE_KEY);
    }
  }

  private setTransferState(key: StateKey<ArticlesHomeViewRouteData>, routeData: ArticlesHomeViewRouteData): void {
    if (isPlatformServer(this.platformId)) {
      this.transferState.set(key, routeData);
    }
  }

  private loadRouteData(key: StateKey<ArticlesHomeViewRouteData>): Observable<ArticlesHomeViewRouteData> {
    return new Observable<ArticlesHomeViewRouteData>(observer => {
      let allCategories: Array<Category> = [];
      this.articlesFireHttp.getCategories({ isLive: true, orderField: 'updated', isDesc: false })
        .then(cats => {
          allCategories = [...cats ?? []];
          if (allCategories.length) {
            Promise.all(allCategories
              .map((cat: Category) => {
                const queryConfig: QueryConfig = {
                  isLive: true,
                  articleCategoryId: cat.id,
                  orderField: 'updated',
                  orderFieldType: StructuredQueryValueType.stringValue,
                  pageSize: this.pageSize,
                  isForwardDir: true,
                  startPage: null,
                  isDesc: true,
                };
                return this.articlesFireHttp.getArticles(queryConfig);
              }))
              .then(catsGroupArticles => {
                const catGroups = allCategories.map((cat, index) => ({ category: { ...cat }, articles: [...catsGroupArticles[index]] } as CategoryGroup));
                const routeData = { allCategoriesGroups: catGroups } as ArticlesHomeViewRouteData;
                this.setTransferState(key, routeData);
                observer.next(routeData);
              })
              .catch(error => observer.error(error))
          } else {
            const routeData = { allCategoriesGroups: [] } as ArticlesHomeViewRouteData;
            this.setTransferState(key, routeData);
            observer.next(routeData);
          }
        })
        .catch(error => observer.error(error))
    });
  }
}
