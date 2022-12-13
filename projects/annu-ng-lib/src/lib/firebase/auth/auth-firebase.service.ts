import { LibConfig } from '../../app-config/app-config.interface';
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { getAuth, User, Auth, onAuthStateChanged } from 'firebase/auth';
import { Observable, Subject } from 'rxjs';
import { CommonFirebaseService } from '../common-firebase';
import { FIREBASE_AUTH_ROLES } from './auth-firebase.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
  auth: Auth;
  authState: Subject<User> = new Subject<User>();

  constructor(private commonFireSvc: CommonFirebaseService, @Inject(PLATFORM_ID) private platformId, private libConfig: LibConfig) {
    this.auth = this.getFirebaseAuth();
    onAuthStateChanged(this.getFirebaseAuth(), (user: User) => {
      this.authState.next(user)
    });

    this.authState.subscribe(user => {
      this.setLoggedInToLocalStorage(user);
    });
  }

  private getFirebaseAuth(): Auth {
    if (this.auth) {
      return this.auth;
    }

    const app = this.commonFireSvc.initOrGetFirebaseApp();
    const auth = getAuth(app);

    return auth;
  }


  public getCurrentUser(): User {
    const auth = this.getFirebaseAuth();
    return auth.currentUser;
  }

  public getCurrentUserId(): string {
    const auth = this.getFirebaseAuth();
    return auth.currentUser && auth.currentUser.uid || '';
  }

  public isLoggedIn(): boolean {
    const auth = this.getFirebaseAuth();
    return auth.currentUser ? true : false;
  }

  public authStateChanged(): Observable<User> {
    return this.authState.asObservable();
  }

  public async getUserRoles(): Promise<Array<string>> {
    const auth = this.getFirebaseAuth();
    const idTokenResult = await auth.currentUser.getIdTokenResult();
    const claims = idTokenResult && idTokenResult.claims;
    const claimsArray: Array<string> = [];
    if (claims) {
      Object.keys(FIREBASE_AUTH_ROLES).forEach(key => {
        if (claims[FIREBASE_AUTH_ROLES[key]]) {
          claimsArray.push(FIREBASE_AUTH_ROLES[key]);
        }
      })
    }

    return claimsArray;
  }

  public async isUserHasRole(role: string): Promise<boolean> {
    const auth = this.getFirebaseAuth();
    const idTokenResult = await auth.currentUser.getIdTokenResult();
    const claims = idTokenResult && idTokenResult.claims;
    if (typeof claims === 'object' && claims[role]) {
      return true;
    }

    return false;
  }

  public async logout(): Promise<boolean> {
    const auth = this.getFirebaseAuth();
    await auth.signOut();
    this.authState.next(null);
    return true;
  }

  public isLoggedInFromLocalStorage(): User {
    if (isPlatformBrowser(this.platformId)) {
        const currentUser = window.localStorage.getItem('currentUser');

        return currentUser ? JSON.parse(currentUser) as User : null;
    } else {
      return null;
    }
  }

  public setLoggedInToLocalStorage(user: User): void {
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('currentUser', '' + user ? JSON.stringify(user) : '');
      if (user) {
        user.getIdToken().then(token => {
          // TODO: if cookie already exists
          if (token) {
            window.document.cookie = 'Authorization=Bearer ' + token;
          }
        })
      }
    }
  }
}
