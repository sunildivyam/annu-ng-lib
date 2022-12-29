import { DocsData } from '../../docs/docs.interface';
const classInfo = {
    "name": "FirebaseConfig",
    "description": "",
    "tsUrl": "projects/annu-ng-lib/src/lib/firebase/firebase.interface.ts",
    "tsSource": "export class FirebaseConfig {\r\n    public projectId? = '';\r\n    public appId? = '';\r\n    public storageBucket? = '';\r\n    public locationId? = '';\r\n    public apiKey? = '';\r\n    public authDomain? = '';\r\n    public messagingSenderId? = '';\r\n    public measurementId? = '';\r\n}\r\n\r\n\r\nexport interface QueryConfig {\r\n    userId?: string;\r\n    id?: string | Array<string>;\r\n    articleCategoryId?: string | Array<string>;\r\n    orderField?: string;\r\n    isDesc?: boolean;\r\n    isForwardDir?: boolean;\r\n    startPage?: any;\r\n    pageSize?: number;\r\n    isLive?: boolean | null;\r\n  };\r\n",
    "inputProps": [],
    "outputProps": [],
    "props": [
        {
            "name": "apiKey",
            "type": "string",
            "defaultValue": "''",
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": "public"
        },
        {
            "name": "appId",
            "type": "string",
            "defaultValue": "''",
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": "public"
        },
        {
            "name": "authDomain",
            "type": "string",
            "defaultValue": "''",
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": "public"
        },
        {
            "name": "locationId",
            "type": "string",
            "defaultValue": "''",
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": "public"
        },
        {
            "name": "measurementId",
            "type": "string",
            "defaultValue": "''",
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": "public"
        },
        {
            "name": "messagingSenderId",
            "type": "string",
            "defaultValue": "''",
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": "public"
        },
        {
            "name": "projectId",
            "type": "string",
            "defaultValue": "''",
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": "public"
        },
        {
            "name": "storageBucket",
            "type": "string",
            "defaultValue": "''",
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": "public"
        }
    ],
    "methods": []
};

export const ClassInfoComponent: DocsData = {
    projectionContent: '',
    inputPropsValues: {
        classInfo
    }
}
