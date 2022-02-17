import { LibConfig } from "@annu-ng-lib";
import { firebaseAppConfig, firebaseui } from "../app/config/firebase.config";

export const environment = {
  production: true,
  libConfig: {
    docsJsonUrl: '/data/documentation.json',
    firebaseui: { ...firebaseui },
    firebase: { ...firebaseAppConfig },
  } as LibConfig
};
