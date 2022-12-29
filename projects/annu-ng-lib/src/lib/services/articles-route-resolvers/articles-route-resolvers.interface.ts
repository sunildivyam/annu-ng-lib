import { Article, CategoryGroup } from "../../components/cms";

export interface ArticlesHomeViewRouteData {
    allCategoriesGroups?: Array<CategoryGroup>;
    errorAllCategoriesGroups?: any;
}

export interface CategoryViewRouteData {
    categoryGroup?: CategoryGroup;
    errorCategoryGroup?: any;
    allCategoriesGroups?: Array<CategoryGroup>;
    errorAllCategoriesGroups?: any;

    // startPage and end page should have orderBy values of the first and last record/article from the list.
    startPage?: string;
    endPage?: string;
}

export interface ArticleViewRouteData {
    article?: Article,
    errorArticle?: any;
}


export enum PageDirection {
    FORWARD = 'f',
    BACKWARD = 'b'
};
