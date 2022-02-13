import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, UserCredential, getAuth, GoogleAuthProvider, signInWithPopup, User, Auth, signInWithEmailAndPassword, ProviderId } from 'firebase/auth';
import { FirebaseApp, FirebaseError, getApps, initializeApp } from 'firebase/app';
import { LibConfig } from '../../annu-ng-lib.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
  auth: Auth;

  constructor(private libConfig: LibConfig) {
    this.auth = this.getFirebaseAuth();
  }

  private getFirebaseApp(): FirebaseApp {
    const firebaseApps = getApps();
    const firebaseApp = firebaseApps.length ? firebaseApps[0] : initializeApp(this.libConfig.firebase);

    return firebaseApp;
  }

  private getFirebaseAuth(): Auth {
    if (this.auth) {
      return this.auth;
    }

    const app = this.getFirebaseApp();
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
    console.log('result', result);

    if (result) {
      // This is the signed-in user
      const user = result.user;
      // This gives you a Google Access Token.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log('LOgged In: ', token);
      console.log('USER: ', result.user);

    }
  }

  public async getAuthProviders() {
    const auth = this.getFirebaseAuth();
  }

  public async logout(): Promise<boolean> {
    const auth = this.getFirebaseAuth();
    try {
      await auth.signOut();
      return true;
    } catch(error: any) {
      return false;
    }
  }
}
