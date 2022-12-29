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
        let updatedMilliseconds = Number(this.utilsSvc.dateStringToTotalTimeString(this.utilsSvc.currentDate));
        return new Promise((resolve, reject) => {
            const categories: Array<Category> = [];
            for (let catI = 1; catI <= categoriesCount; catI++) {
                setTimeout(() => {
                    updatedMilliseconds = ++updatedMilliseconds;
                    try {
                        categories.push({
                            ...SEED_CATEGORY,
                            id: `${SEED_CATEGORY.id}-${catI}`,
                            shortTitle: `${SEED_CATEGORY.shortTitle} ${catI}`,
                            updated: this.utilsSvc.totalTimeStringToUTCdateString(updatedMilliseconds.toString()),
                            created: this.utilsSvc.totalTimeStringToUTCdateString(updatedMilliseconds.toString()),
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
                });
            }
        });
    }

    private async generateCategoryArticles(category: Category,
        categoryArticlesCount: number): Promise<Array<Article>> {
        const catIdSplittedArray = category.id.split('-');
        const categoryIndex = Number(catIdSplittedArray[catIdSplittedArray.length - 1]);
        let updatedMilliseconds = Number(this.utilsSvc.dateStringToTotalTimeString(this.utilsSvc.currentDate));
        return new Promise((resolve, reject) => {
            if (!category) throw new Error('Category is required.');

            const articles: Array<Article> = [];

            for (let articleI = 1; articleI <= categoryArticlesCount; articleI++) {
                setTimeout(() => {
                    try {
                        const articleIndex = (categoryIndex * categoryArticlesCount) - (categoryArticlesCount - articleI);
                        updatedMilliseconds = updatedMilliseconds + articleIndex;
                        articles.push({
                            ...SEED_ARTICLE,
                            id: `${SEED_ARTICLE.id}-${articleIndex}`,
                            updated: this.utilsSvc.totalTimeStringToUTCdateString(updatedMilliseconds.toString()),
                            created: this.utilsSvc.totalTimeStringToUTCdateString(updatedMilliseconds.toString()),
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
                });
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
        const catArticles = await Promise.all(categories.map(cat => this.generateCategoryArticles(cat, categoryArticlesCount)));
        let articles: Array<Article> = [];
        catArticles.forEach(arts => {
            articles = articles.concat(arts);
        });

        return { categories, articles };
    }

}
