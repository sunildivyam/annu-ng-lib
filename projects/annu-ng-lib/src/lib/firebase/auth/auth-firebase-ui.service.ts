import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AuthFirebaseService } from './auth-firebase.service';

import { LibConfig } from '../../app-config/app-config.interface';
import { AdditionalUserInfo, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseUiService {
  temp: string = '';

  constructor(private libConfig: LibConfig, private authFireSvc: AuthFirebaseService) { }

  private initOrGetFirebaseCompactApp() {
    return firebase.apps.length ? firebase.apps[0] : firebase.initializeApp(this.libConfig.firebase);
  }

  public async startAuthUI(elementId, successCb = null, errorCb = null, uiShownCb = null): Promise<void> {

    const app = this.initOrGetFirebaseCompactApp();
    const auth = firebase.app().auth();

    const firebaseui = await import('firebaseui');
    const ui = firebaseui.auth && (firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth));

    const uiConfig = {
      ...this.libConfig.firebaseui, callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          const user: User = authResult?.user;
          const additionalUserInfo: AdditionalUserInfo = authResult?.additionalUserInfo;

          if (user && additionalUserInfo?.isNewUser) {
            // Check if refresh is required.
            // if the user is new, signed in first time, refresh the token
            user.getIdToken(true)
              .then(() => {
                this.authFireSvc.authState.next(user);
                if (successCb) {
                  successCb(user, redirectUrl);
                }
              });
          } else {
            this.authFireSvc.authState.next(user);
            if (successCb) {
              successCb(user, redirectUrl);
            }
          }
        },
        signInFailure: (error) => {
          // User sign in failure;
          if (errorCb) {
            errorCb(error);
          }
        },
        uiShown: () => {
          // The widget is rendered.
          // Hide the loader.
          if (uiShownCb) {
            uiShownCb();
          }
        }
      }
    };

    setTimeout(() => {
      ui && ui.start(elementId, uiConfig);
    });
  }
}
