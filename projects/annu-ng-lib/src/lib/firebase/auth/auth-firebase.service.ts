import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, UserCredential, getAuth, GoogleAuthProvider, signInWithPopup, User, Auth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
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

  public async createUserWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {

    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);

    return userCredential;
  }

  public async loginWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    const auth = this.getFirebaseAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    return userCredential;
  }

  public async loginWithGoogle() {
    const auth = this.getFirebaseAuth();
    // await setPersistence(this.auth, browserLocalPersistence);
    // Sign in using a redirect.
    const provider = new GoogleAuthProvider();
    // Start a sign in process for an unauthenticated user.
    provider.addScope('profile');
    provider.addScope('email');

    // await signInWithRedirect(auth, provider);
    const result = await signInWithPopup(auth, provider);

    // This will trigger a full page redirect away from your app

    // After returning from the redirect when your app initializes you can obtain the result
    // let result = await getRedirectResult(auth);

    if (result) {
      // This is the signed-in user
      const user = result.user;
      // This gives you a Google Access Token.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
    }
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
