import { MetaInfo } from "../components/common-ui/meta";
import { FirebaseConfig } from "../firebase/firebase.interface";

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
}


export class LibConfig {
    docsJsonUrl?: string = '';
    firebaseui?: any;
    firebase?: FirebaseConfig;
}
