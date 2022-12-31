import { MetaInfo } from "../components/common-ui/meta";
import { FirebaseConfig, FirebaseStoreConfig } from "../firebase/firebase.interface";
import { MenuItem } from "../components/common-ui/menu/menu.interface";

export interface AppConfig {
    name: string;
    copyrightText: string;
    themeName: string;
    loginUrl?: string;
    logoutUrl?: string;
    profileUrl?: string;
    tNcUrl: string;
    privacyPolicyUrl: string;
    metaInfo: MetaInfo;
    mainMenuItems: Array<MenuItem>;
}


export class LibConfig {
    docsJsonUrl?: string = '';
    firebaseui?: any;
    firebase?: FirebaseConfig;
    firebaseStoreConfig: FirebaseStoreConfig;
    apiBaseUrl?: string;
}
