import { LibConfig } from "@annu/ng-lib";
import { firebaseAppConfig, firebaseui, firebaseStoreConfig } from "../app/config/firebase.config";
import { openaiConfig } from "../app/config/openai.config";
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
    fireStorageBaseApiUrl: 'https://firebasestorage.googleapis.com/v0/b/annuadvent-prod.appspot.com/o',
    openaiConfig: {...openaiConfig, organization: 'org-3uZAy9V8Mqwjhp0g5Bw2AGo1', apiKey: ''},
  } as LibConfig
};
