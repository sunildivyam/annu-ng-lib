import { StructuredQueryValueType } from "./common-firebase";

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
    selectFields?: Array<string>;
};

export class FirebaseStoreConfig {
    public baseStoreUrl: string;
    public maxKBs: number;
    public maxWidth: number;
    public maxHeight: number;
    public minWidth: number;
    public minHeight: number;
}
