import { Injectable } from '@angular/core';
import { Category, Article } from "../../components/cms";
import { SEED_CATEGORY, SEED_ARTICLE } from "./articles-firebase.constants";
import { UtilsService } from '../../services/utils';
import { ArticlesDatabaseSeed } from './articles-firebase.interface';

/**
 * Description placeholder
 * @date 19/2/2022 - 3:48:18 pm
 *
 * @export
 * @class ArticlesSeedService
 * @typedef {ArticlesSeedService}
 */
@Injectable({
    providedIn: 'root'
})
export class ArticlesFirebaseSeedService {

    constructor(private utilsSvc: UtilsService) { }

    private async generateCategories(userId: string,
        categoriesCount: number,
        featuredCatgoriesCount: number): Promise<Array<Category>> {
        return new Promise((resolve, reject) => {
            const categories: Array<Category> = [];
            for (let catI = 1; catI <= categoriesCount; catI++) {
                setTimeout(() => {
                    try {
                        categories.push({
                            ...SEED_CATEGORY,
                            id: `${SEED_CATEGORY.id}-${catI}`,
                            shortTitle: `${SEED_CATEGORY.shortTitle} ${catI}`,
                            updated: this.utilsSvc.currentDate,
                            created: this.utilsSvc.currentDate,
                            userId: userId,
                            isFeatured: catI <= featuredCatgoriesCount,
                            metaInfo: {
                                ...SEED_CATEGORY.metaInfo,
                                title: `${SEED_CATEGORY.metaInfo.title} ${catI}`,
                                url: `/${SEED_CATEGORY.id}-${catI}`
                            },
                            image: {
                                ...SEED_CATEGORY.image,
                                alt: `${SEED_CATEGORY.image.alt} ${catI}`,
                            }
                        });
                    } catch (err) {
                        reject(err);
                    }
                    if (catI === categoriesCount) {
                        resolve(categories);
                    }
                }, 2);  // 2 milliseconds, just to add a gap of atleast 2 ms in the 'updated' or 'created' fields.
            }
        });
    }

    private async generateCategoryArticles(category: Category,
        categoryArticlesCount: number): Promise<Array<Article>> {
            const catIdSplittedArray = category.id.split('-');
            const categoryIndex = Number(catIdSplittedArray[catIdSplittedArray.length - 1]);
        return new Promise((resolve, reject) => {
            if (!category) throw new Error('Category is required.');

            const articles: Array<Article> = [];

            for (let articleI = 1; articleI <= categoryArticlesCount; articleI++) {
                setTimeout(() => {
                    try {
                        const articleIndex = (categoryIndex * categoryArticlesCount) - (categoryArticlesCount - articleI);
                        articles.push({
                            ...SEED_ARTICLE,
                            id: `${SEED_ARTICLE.id}-${articleIndex}`,
                            updated: this.utilsSvc.currentDate,
                            created: this.utilsSvc.currentDate,
                            userId: category.userId,
                            metaInfo: {
                                ...SEED_ARTICLE.metaInfo,
                                title: `${SEED_ARTICLE.metaInfo.title} ${articleIndex}`,
                                url: `/${SEED_ARTICLE.id}-${articleIndex}`
                            },
                            image: {
                                ...SEED_ARTICLE.image,
                                alt: `${SEED_ARTICLE.image.alt} ${articleIndex}`,
                            },
                            categories: [category.id],
                        });
                    } catch (err) {
                        reject(err);
                    }
                    if (articleI === categoryArticlesCount) {
                        resolve(articles);
                    }
                }, 2);  // 2 milliseconds, just to add a gap of atleast 2 ms in the 'updated' or 'created' fields.
            }
        });
    }

    public async generateArticlesDatabaseSeed(userId: string,
        categoriesCount: number,
        featuredCatgoriesCount: number,
        categoryArticlesCount: number): Promise<ArticlesDatabaseSeed> {
        if (featuredCatgoriesCount > categoriesCount) {
            throw new Error('Featured categories count can not be more than categories count.');
        }

        if (categoriesCount <= 0 || categoryArticlesCount <= 0) {
            throw new Error('Categories count or Category Articles count must be a positive value.');
        }

        // populate Categories
        const categories = await this.generateCategories(userId, categoriesCount, featuredCatgoriesCount);
        const catArticles = await Promise.all(categories.map (cat => this.generateCategoryArticles(cat, categoryArticlesCount)));
        let articles: Array<Article> = [];
        catArticles.forEach(arts => {
            articles = articles.concat(arts);
        });

        return { categories, articles };
    }

}
