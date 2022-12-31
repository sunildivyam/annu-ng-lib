import { LibConfig } from "@annu/ng-lib";
import { firebaseAppConfig, firebaseui, firebaseStoreConfig } from "../app/config/firebase.config";

export const environment = {
  production: true,
  libConfig: {
    apiBaseUrl: 'http://localhost:5000',  // This should be the hosted url
    docsJsonUrl: '/data/documentation.json',
    firebaseui: { ...firebaseui },
    firebase: { ...firebaseAppConfig, apiKey: '' },
    firebaseStoreConfig,
  } as LibConfig
};
