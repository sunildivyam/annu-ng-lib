import { StructuredQueryValue, StructuredQueryValueType } from "./common-firebase/common-firebase.interface";

export class FirebaseConfig {
    public projectId?= '';
    public appId?= '';
    public storageBucket?= '';
    public locationId?= '';
    public apiKey?= '';
    public authDomain?= '';
    public messagingSenderId?= '';
    public measurementId?= '';
}


export interface QueryConfig {
    userId?: string;
    id?: string | Array<string>;
    articleCategoryId?: string | Array<string>;
    orderField?: string;
    orderFieldType?: StructuredQueryValueType;
    isDesc?: boolean;
    isForwardDir?: boolean;
    startPage?: any;
    pageSize?: number;
    isLive?: boolean | null;
    updated?: string;
    selectFields?: Array<string>;
    features?: string | Array<string>;
};

export class FirebaseStoreConfig {
    public baseStoreUrl: string;
    public maxKBs: number;
    public maxWidth: number;
    public maxHeight: number;
    public minWidth: number;
    public minHeight: number;
}

export interface FirebaseDocument {
    name?: string;
    fields?: {
        [key: string]: StructuredQueryValue
    },
    createTime?: string;
    updateTime?: string;
}
