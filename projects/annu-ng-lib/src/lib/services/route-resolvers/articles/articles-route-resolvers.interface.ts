import { Category, Article, CategoryGroup } from "../../../components/cms";

export interface HomeViewRouteData {
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
