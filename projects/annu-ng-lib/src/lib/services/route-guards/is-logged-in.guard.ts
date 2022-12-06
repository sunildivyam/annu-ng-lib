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
        console.log('Already Logged In')
        resolve(true);
      } else if(this.authFireSvc.isLoggedInFromLocalStorage()) {
        console.log('Already Logged in from Local Storage - ');
        resolve(true);
      } else {
        this.authFireSvc.authStateChanged().subscribe(user => {
          if (user) {
            console.log('Success After Subscription');
            resolve(true);
          } else {
            console.log('Success After Subscription, REDIRECT - to - ', urlTree);
            resolve(urlTree);
          }
        })
      }
    })
  }
}
