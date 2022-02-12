// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FirebaseConfig, LibConfig } from "@annu-ng-lib";


export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
