import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ArticlesFirebaseHttpService, PageArticles, AuthFirebaseService } from '../../../firebase';



@Injectable()
export class MyArticlesViewRouteResolver implements Resolve<PageArticles> {
  constructor(private articlessFireHttp: ArticlesFirebaseHttpService, private authFireService: AuthFirebaseService) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<PageArticles> {
    if (!route.firstChild) {
      return await this.articlessFireHttp.getUsersOnePageShallowArticles(this.authFireService.getCurrentUserId(), null);
    }

    return null;
  }
}
