import { Injectable } from '@angular/core';
import { ProviderId } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import { AuthFirebaseService } from '.';

import { LibConfig } from '../../annu-ng-lib.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseUiService {
  temp: string = '';

  constructor(private libConfig: LibConfig, private authFireSvc: AuthFirebaseService) { }

  public async startAuthUI(elementId): Promise<void> {
    const app = firebase.initializeApp(this.libConfig.firebase);
    const auth = firebase.app().auth();

    const firebaseui = await import('firebaseui');
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    ui.start(elementId, {
      signInFlow: 'popup',
      siteName: 'Annu Ng Lib Components',
      tosUrl: '/tnc',
      privacyPolicyUrl: '/privacy-policy',
      signInSuccessUrl: '/components/auth/login-status',
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          this.authFireSvc.authState.next(authResult.user);
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
        signInFailure: (error) => {},
        uiShown: () => {
          // The widget is rendered.
          // Hide the loader.

        }
      },
      signInOptions: [
        // List of OAuth providers supported.
        {
          provider: ProviderId.GOOGLE,
        },
        ProviderId.FACEBOOK,
        {
          provider: ProviderId.PASSWORD,
          // signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
          requireDisplayName: true,
        },
        {
          provider: ProviderId.PHONE,
          recaptchaParameters: {
            type: 'image', // 'audio'
            size: 'normal', // 'invisible' or 'compact'
            badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
          },
          defaultCountry: 'IN',
          loginHint: '+91-1234567890',
        },
        ProviderId.TWITTER,
        ProviderId.GITHUB,
      ]
    })
  }
}
