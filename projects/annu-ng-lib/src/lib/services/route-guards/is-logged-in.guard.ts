import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
  UrlTree
} from '@angular/router';
import { AuthFirebaseService } from '../../firebase/auth/auth-firebase.service';


@Injectable()
export class IsLoggedInGuard implements CanActivate, CanActivateChild {

  constructor(private authFireSvc: AuthFirebaseService,
    private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    return this.checkUserLoggedIn(route, state);
  }

  async canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    return this.checkUserLoggedIn(route, state);
  }

  public async checkUserLoggedIn(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const redirectUrl = route?.data['redirectUrl'] || '/login';
    const urlTree = this.router.parseUrl(`${redirectUrl}?returnUrl=${state.url}`);

    return new Promise((resolve, reject) => {
      if (this.authFireSvc.isLoggedIn()) {
        resolve(true);
      } else {
        this.authFireSvc.authStateChanged().subscribe(user => {
          if (user) {
            resolve(true);
          } else {
            resolve(urlTree);
          }
        })
      }
    })
  }
}
