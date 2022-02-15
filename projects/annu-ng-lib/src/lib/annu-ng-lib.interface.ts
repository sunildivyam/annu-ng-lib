import { FirebaseConfig } from "./firebase";

export class LibConfig {
    docsJsonUrl?: string = '';
    signInMethods?: Array<string> = [];
    firebase?: FirebaseConfig;
}
