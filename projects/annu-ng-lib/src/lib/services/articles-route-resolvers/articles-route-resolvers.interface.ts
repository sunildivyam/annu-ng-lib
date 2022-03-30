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
}

export interface ArticleViewRouteData {
    article?: Article,
    errorArticle?: any;
}
