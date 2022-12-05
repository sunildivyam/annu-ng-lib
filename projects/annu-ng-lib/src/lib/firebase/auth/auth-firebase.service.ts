import { Injectable } from '@angular/core';
import { getAuth, User, Auth, onAuthStateChanged } from 'firebase/auth';
import { Observable, Subject } from 'rxjs';
import { CommonFirebaseService } from '../common-firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
  auth: Auth;
  authState: Subject<User> = new Subject<User>();

  constructor(private commonFireSvc: CommonFirebaseService) {
    this.auth = this.getFirebaseAuth();
    onAuthStateChanged(this.getFirebaseAuth(), (user: User) => {
      this.setLoggedInToLocalStorage(!!user)
      this.authState.next(user)
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

  public async isUserAdmin(): Promise<boolean> {
    const auth = this.getFirebaseAuth();
    const idTokenResult = await auth.currentUser.getIdTokenResult();
    return !!idTokenResult?.claims?.admin;
  }

  public async logout(): Promise<boolean> {
    const auth = this.getFirebaseAuth();
    await auth.signOut();
    return true;
  }

  public isLoggedInFromLocalStorage(): boolean {
    if (typeof window !== 'undefined') {
      const isLoggedIn = window.localStorage.getItem('isLoggedIn');
      return isLoggedIn === 'true' ? true : false;
    }
  }

  public setLoggedInToLocalStorage(isLoggedIn: boolean): void {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('isLoggedIn', '' + isLoggedIn);
    }
  }
}
