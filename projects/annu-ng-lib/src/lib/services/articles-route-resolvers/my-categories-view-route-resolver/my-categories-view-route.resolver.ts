import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { CategoriesFirebaseHttpService, PageCategories, AuthFirebaseService, FIREBASE_AUTH_ROLES } from '../../../firebase';



@Injectable()
export class MyCategoriesViewRouteResolver implements Resolve<PageCategories> {
  constructor(private categoriesFireHttp: CategoriesFirebaseHttpService, private authFireService: AuthFirebaseService) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<PageCategories> {
    if (!route.firstChild) {
      const isAdmin = await this.authFireService.currentUserHasRole(FIREBASE_AUTH_ROLES.ADMIN);
      if (isAdmin) {
        return await this.categoriesFireHttp.getAllUsersOnePageShallowCategories(null);
      } else {
        return await this.categoriesFireHttp.getUsersOnePageShallowCategories(this.authFireService.getCurrentUserId(), null);
      }
    }

    return null;
  }
}
