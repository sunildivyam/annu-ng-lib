import { LibConfig } from "@annu/ng-lib";
import { firebaseAppConfig, firebaseui, firebaseStoreConfig } from "../app/config/firebase.config";
const baseUrl = 'http://localhost:5000';

export const environment = {
  production: true,
  libConfig: {
    apiBaseUrl: baseUrl,  // This should be the hosted url
    docsJsonUrl: `${baseUrl}/assets/documentation.json`,
    firebaseui: { ...firebaseui },
    firebase: { ...firebaseAppConfig, apiKey: '' },
    firebaseStoreConfig,
    firestoreBaseApiUrl: 'https://firestore.googleapis.com/v1/projects/annu-business/databases/(default)/documents',
  } as LibConfig
};
