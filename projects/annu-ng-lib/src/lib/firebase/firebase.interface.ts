export class FirebaseConfig {
    public projectId? = '';
    public appId? = '';
    public storageBucket? = '';
    public locationId? = '';
    public apiKey? = '';
    public authDomain? = '';
    public messagingSenderId? = '';
    public measurementId? = '';
}


export interface QueryConfig {
    userId?: string;
    name?: string | Array<string>;
    id?: string | Array<string>;
    articleCategoryId?: string | Array<string>;
    orderField?: string;
    isDesc?: boolean;
    isNextPages?: boolean;
    startPage?: any;
    pageSize?: number;
    isLive?: boolean | null;
  };
