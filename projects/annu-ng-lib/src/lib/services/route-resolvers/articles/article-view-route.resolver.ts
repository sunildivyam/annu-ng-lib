import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { ArticleViewRouteData } from './articles-route-resolvers.interface';

import { ArticlesFirebaseService, QueryConfig } from '../../../firebase';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ArticleViewRouteResolver implements Resolve<ArticleViewRouteData> {

  routeData: ArticleViewRouteData = {};

  constructor(private articlesFireSvc: ArticlesFirebaseService, private transferState: TransferState, @Inject(PLATFORM_ID) private platformId) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ArticleViewRouteData> {
    this.routeData = {};
    const articleId = route.params['articleId'];
    // create a unique key that holds the route stata data.
    const ARTICLE_VIEW_ROUTE_KEY = makeStateKey<ArticleViewRouteData>('article-view-route-' + articleId);

    //Check if state data already exists, if yes, serve it from state, and clear the state else, fetch the data and set it to state, that can be used at client side.
    if (this.transferState.hasKey(ARTICLE_VIEW_ROUTE_KEY)) {
      this.routeData = this.transferState.get<ArticleViewRouteData>(ARTICLE_VIEW_ROUTE_KEY, {});
      this.transferState.remove(ARTICLE_VIEW_ROUTE_KEY);

      return this.routeData;
    } else {
      await this.getArticle(articleId);

      if (isPlatformServer(this.platformId)) {
        this.transferState.set(ARTICLE_VIEW_ROUTE_KEY, this.routeData);
      }
      return this.routeData;
    }
  }

  private async getArticle(articleId: string) {
    const queryConfig: QueryConfig = {
      id: articleId,
      isLive: true,
    }

    try {
      const foundArticles = await this.articlesFireSvc.getArticles(queryConfig);
      if (foundArticles && foundArticles.length) {
        this.routeData.article = foundArticles[0];
      } else {
        this.routeData.errorArticle = { code: '404', message: `Page does not exist - ${articleId}` }
      }
    } catch (error) {
      this.routeData.errorArticle = error;
      this.routeData.article = null;
    }
  }
}
