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
    adminEmail?: string;
    defaultPageSize: number;
    metaInfo: MetaInfo;
    mainMenuItems: Array<MenuItem>;
}


export class LibConfig {
    docsJsonUrl?: string = '';
    firebaseui?: any;
    firebase?: FirebaseConfig;
    firebaseStoreConfig: FirebaseStoreConfig;
    firestoreBaseApiUrl: string;
    apiBaseUrl?: string;
}
