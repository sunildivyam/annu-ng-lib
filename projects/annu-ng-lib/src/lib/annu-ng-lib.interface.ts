import { FirebaseConfig } from "./firebase";

export class LibConfig {
    docsJsonUrl?: string = '';
    signInProviders?: Array<string> = [];
    firebase?: FirebaseConfig;
}
