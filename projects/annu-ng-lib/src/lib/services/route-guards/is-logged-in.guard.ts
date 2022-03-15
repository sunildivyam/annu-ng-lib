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

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const loginUrl = route?.data['loginUrl'] || '/login';
    const urlTree = this.router.parseUrl(`${loginUrl}?returnUrl=${state.url}`);
    return this.checkUserLoggedIn(urlTree);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const loginUrl = route?.data['loginUrl'] || '/login';
    const urlTree = this.router.parseUrl(`${loginUrl}?returnUrl=${state.url}`);
    return this.checkUserLoggedIn(urlTree);
  }

  public checkUserLoggedIn(urlTree: UrlTree): Promise<boolean | UrlTree> {
    return new Promise((resolve, reject) => {
      if (this.authFireSvc.isLoggedIn()) {
        resolve(true);
      } else if(!this.authFireSvc.isLoggedInFromLocalStorage()) {
        resolve(urlTree);
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
