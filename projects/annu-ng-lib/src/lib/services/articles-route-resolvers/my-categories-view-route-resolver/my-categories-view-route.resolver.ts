import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { CategoriesFirebaseHttpService, PageCategories, AuthFirebaseService } from '../../../firebase';



@Injectable()
export class MyCategoriesViewRouteResolver implements Resolve<PageCategories> {
  constructor(private categoriesFireHttp: CategoriesFirebaseHttpService, private authFireService: AuthFirebaseService) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<PageCategories> {
    if (!route.firstChild) {
      return await this.categoriesFireHttp.getUsersOnePageShallowCategories(this.authFireService.getCurrentUserId(), null);
    }

    return null;
  }
}
