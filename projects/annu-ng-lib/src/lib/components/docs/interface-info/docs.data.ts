import { DocsData } from '../../docs/docs.interface';
const interfaceInfo = {
    "name": "ArticlesHomeViewRouteData",
    "description": "",
    "tsUrl": "projects/annu-ng-lib/src/lib/services/articles-route-resolvers/articles-route-resolvers.interface.ts",
    "tsSource": "import { Article, CategoryGroup } from \"../../components/cms\";\r\n\r\nexport interface ArticlesHomeViewRouteData {\r\n    allCategoriesGroups?: Array<CategoryGroup>;\r\n    errorAllCategoriesGroups?: any;\r\n}\r\n\r\nexport interface CategoryViewRouteData {\r\n    categoryGroup?: CategoryGroup;\r\n    errorCategoryGroup?: any;\r\n    allCategoriesGroups?: Array<CategoryGroup>;\r\n    errorAllCategoriesGroups?: any;\r\n}\r\n\r\nexport interface ArticleViewRouteData {\r\n    article?: Article,\r\n    errorArticle?: any;\r\n}\r\n",
    "inputProps": [],
    "outputProps": [],
    "props": [
        {
            "name": "allCategoriesGroups",
            "type": "Array<CategoryGroup>",
            "defaultValue": "",
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": ""
        },
        {
            "name": "errorAllCategoriesGroups",
            "type": "any",
            "defaultValue": "",
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": ""
        }
    ],
    "methods": []
};

export const InterfaceInfoComponent: DocsData = {
    projectionContent: '',
    inputPropsValues: {
        interfaceInfo
    }
}
