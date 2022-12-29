import { Article, Category } from "../../components/cms";

export interface ArticlesDatabaseSeed {
    categories: Array<Category>;
    articles: Array<Article>;
};
