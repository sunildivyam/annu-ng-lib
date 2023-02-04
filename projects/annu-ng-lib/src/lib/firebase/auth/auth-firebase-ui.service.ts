import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import { AuthFirebaseService } from './auth-firebase.service';

import { LibConfig } from '../../app-config/app-config.interface';

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
    let callback = null;
    let metadataRef = null;

    const uiConfig = {...this.libConfig.firebaseui, callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        // Remove previous listener.

        if (callback) {
          metadataRef.off('value', callback);
        }
        // On user login add new listener.
        const user = authResult.user;
        if (user) {
          // Check if refresh is required.
          metadataRef = firebase.database().ref('metadata/' + user.uid + '/refreshTime');
          callback = (snapshot) => {
            // Force refresh to pick up the latest custom claims changes.
            // Note this is always triggered on first call. Further optimization could be
            // added to avoid the initial trigger when the token is issued and already contains
            // the latest claims.
            user.getIdToken(true);
            this.authFireSvc.authState.next(authResult.user);
          };
          // Subscribe new listener to changes on that node.
          metadataRef.on('value', callback);
        }

        this.authFireSvc.authState.next(authResult.user);
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

    ui && ui.start(elementId, uiConfig);
  }
}
