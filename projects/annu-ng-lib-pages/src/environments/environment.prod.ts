import { FirebaseConfig, LibConfig } from "@annu-ng-lib";

export const environment = {

  production: true,
  libConfig: {
    docsJsonUrl: '/data/documentation.json',
    firebase: {
      projectId: 'annu-business',
      appId: '',
      storageBucket: 'annu-business.appspot.com',
      locationId: 'us-central',
      apiKey: '',
      authDomain: 'annu-business.firebaseapp.com',
      messagingSenderId: '',
      measurementId: '',
    } as FirebaseConfig,
  } as LibConfig
};
