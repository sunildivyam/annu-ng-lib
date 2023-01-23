import { DocsData } from '../../docs/docs.interface';
const interfaceInfo = {
    "name": "ArticlesHomeViewRouteData",
    "id": "interface-ArticlesHomeViewRouteData-c5809e9d52b7eac963fc776183a8703e5083e4901d19a05b0687e7b834d74147333734a3c7641ce1eb6bc0494ac23f42ee404205c60e21ff42a244a3526dbece",
    "file": "projects/annu-ng-lib/src/lib/services/articles-route-resolvers/articles-route-resolvers.interface.ts",
    "deprecated": false,
    "deprecationMessage": "",
    "type": "interface",
    "sourceCode": "import { Article } from \"../../components/cms\";\r\nimport { PageCategoryGroup } from \"../../firebase\";\r\n\r\nexport interface ArticlesHomeViewRouteData {\r\n    pageCategoryGroups?: Array<PageCategoryGroup>;\r\n}\r\n\r\nexport interface CategoryViewRouteData {\r\n    pageCategoryGroup?: PageCategoryGroup;\r\n    pageCategoryGroups?: Array<PageCategoryGroup>;\r\n}\r\n\r\nexport interface ArticleViewRouteData {\r\n    article?: Article\r\n}\r\n\r\nexport enum PageDirection {\r\n    FORWARD = 'f',\r\n    BACKWARD = 'b'\r\n};\r\n",
    "properties": [
        {
            "name": "pageCategoryGroups",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "Array<PageCategoryGroup>",
            "optional": true,
            "description": "",
            "line": 5
        }
    ],
    "indexSignatures": [],
    "kind": 165,
    "methods": []
};

export const InterfaceInfoComponent: DocsData = {
    projectionContent: '',
    inputPropsValues: {
        interfaceInfo
    }
}
