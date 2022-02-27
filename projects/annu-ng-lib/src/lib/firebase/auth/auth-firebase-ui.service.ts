import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import { AuthFirebaseService } from './auth-firebase.service';

import { LibConfig } from '../../annu-ng-lib.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseUiService {
  temp: string = '';

  constructor(private libConfig: LibConfig, private authFireSvc: AuthFirebaseService) { }

  public async startAuthUI(elementId, successCb = null, errorCb = null, uiShownCb = null): Promise<void> {
    const app = firebase.initializeApp(this.libConfig.firebase);
    const auth = firebase.app().auth();

    const firebaseui = await import('firebaseui');
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    const uiConfig = {...this.libConfig.firebaseui, callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        this.authFireSvc.authState.next(authResult.user);
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.

        if (successCb) {
          successCb(authResult.user, redirectUrl);
        }

        return true;
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
    }};

    ui.start(elementId, uiConfig);
  }
}
