import { Article, Category } from "../../components/cms";

export interface ArticlesDatabaseSeed {
    categories: Array<Category>;
    articles: Array<Article>;
};

export interface PageCategoryGroup {
    category: Category;
    pageArticles: PageArticles;
};

export interface PageCategories {
    categories: Array<Category>;
    startPage?: any;            // startPage reference
    endPage?: any;              // endPage reference
    previousPage?: any;         // previous page reference if any
    nextPage?: any;             // next page reference if any
};

export interface PageArticles {
    articles: Array<Article>;
    startPage?: any;            // startPage reference
    endPage?: any;              // endPage reference
    previousPage?: any;         // previous page reference if any
    nextPage?: any;             // next page reference if any
};
