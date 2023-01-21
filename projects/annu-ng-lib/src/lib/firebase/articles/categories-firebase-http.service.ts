import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LibConfig } from '../../app-config';
import { Category } from '../../components/cms/category';
import { AuthFirebaseService } from '../auth';
import { FirestoreParserService, StructuredQueryValueType } from '../common-firebase';
import { QueryConfig } from '../firebase.interface';
import { ArticlesFirebaseHttpQueryService } from './articles-firebase-http-query.service';
import { SHALLOW_CATEGORY_FIELDS } from './articles-firebase-http.contants';
import { ArticlesFirebaseHttpService } from './articles-firebase-http.service';
import { ARTICLES_COLLECTIONS, RUN_QUERY_KEYWORD } from './articles-firebase.constants';
import { PageCategories, PageCategoryGroup } from './articles-firebase.interface';


@Injectable({
  providedIn: 'root'
})
export class CategoriesFirebaseHttpService {
  firestoreApiUrl: string = '';

  constructor(
    private libConfig: LibConfig,
    private http: HttpClient,
    private firestoreParser: FirestoreParserService,
    private authService: AuthFirebaseService,
    private queryService: ArticlesFirebaseHttpQueryService,
    private articlesHttp: ArticlesFirebaseHttpService
  ) {
    this.firestoreApiUrl = this.libConfig.firestoreBaseApiUrl;
  }

  private async buildPageOfCategories(categories: Array<Category>, pageSize: number = 0): Promise<PageCategories> {

    const categoriesCount = categories?.length || 0;
    const pageCategories: PageCategories = {
      categories: categories || [],
      startPage: categoriesCount ? categories[0]?.updated : null,
      endPage: categoriesCount && pageSize && categoriesCount === pageSize ? categories[categoriesCount - 1]?.updated : null
    };

    // NOTE: Commenting this out as firebase does not have a good support for backward pagination. So will implement infinite cyclic pagination
    // if queryConfig is given, that means, previous and next page info will be fetched using this queryConfig.
    // if (categoriesCount > 0 && pageSize > 0 && queryConfig) {
    //   //set previousPage
    //   if ((categoriesCount === pageSize && startPage) || (categoriesCount < pageSize && isForwardDir !== false && startPage)) {
    //     const query = { ...queryConfig, pageSize: 1, startPage: pageCategories.startPage, isForwardDir: false };
    //     const prevCategories = await this.runQueryByConfig(query);
    //     pageCategories.previousPage = prevCategories?.length > 0 ? prevCategories[0] : null;
    //   }

    //   //set nextPage
    //   if ((categoriesCount === pageSize) || (categoriesCount < pageSize && isForwardDir === false && startPage)) {
    //     const query = { ...queryConfig, pageSize: 1, startPage: pageCategories.endPage, isForwardDir: true };
    //     const nextCategories = await this.runQueryByConfig(query);
    //     pageCategories.nextPage = nextCategories?.length > 0 ? nextCategories[0] : null;
    //   }
    // }

    return pageCategories;
  }

  public async runQueryById(id: string): Promise<Category> {
    return new Promise((resolve, reject) => {
      if (!id) {
        reject('Please provide a valid category Id');
      } else {
        const url = `${this.firestoreApiUrl}/${ARTICLES_COLLECTIONS.CATEGORIES}/${id}`;
        const httpSubscription = this.http.get(url).subscribe({
          next: (c: any) => {
            const category: Category = this.firestoreParser.parse(c) as Category;
            httpSubscription.unsubscribe();
            resolve(category);
          },
          error: reject
        });
      }
    });
  }

  public async runQueryByConfig(queryConfig: QueryConfig): Promise<Array<Category>> {
    return new Promise((resolve, reject) => {
      const url = `${this.firestoreApiUrl}${RUN_QUERY_KEYWORD}`;

      const httpSubscription = this.http.post(url, this.queryService.buildStructuredQuery(ARTICLES_COLLECTIONS.CATEGORIES, queryConfig))
        .subscribe({
          next: (cats: any) => {
            const categories: Array<Category> = this.firestoreParser.parse(cats) as Array<Category>;
            httpSubscription.unsubscribe();
            resolve(categories);
          },
          error: reject
        });

    });
  }

  public async getCategory(categoryId: string): Promise<Category> {
    return this.runQueryById(categoryId);
  }

  public async getUsersCategory(userId: string, categoryId: string): Promise<Category> {
    const category = await this.runQueryById(categoryId);
    if (category && category.userId === userId) {
      return category;
    } else if (!category) {
      throw new Error('The Category does not exist.');
    } else {
      throw new Error('The Category does not belong to the given user id.');
    }
  }

  public async getAllLiveCategoriesWithOnePageShallowArticles(pageSize: number = 0, startPage: string | null = null, isForwardDir: boolean = true): Promise<Array<PageCategoryGroup>> {
    const categoriesQueryConfig: QueryConfig = {
      isLive: true,
      orderField: 'updated',
      orderFieldType: StructuredQueryValueType.stringValue,
      selectFields: SHALLOW_CATEGORY_FIELDS
    };

    const categories = await this.runQueryByConfig(categoriesQueryConfig);
    return this.articlesHttp.getLiveShallowArticlesOfCategories(categories, pageSize, startPage, isForwardDir);
  }

  public async getLiveCategoryWithOnePageShallowArticles(categoryId: string, pageSize: number = 0, startPage: string | null = null, isForwardDir: boolean = true): Promise<PageCategoryGroup> {
    if (!categoryId) throw new Error('Please provide a valid category id.');

    const categoryQueryConfig: QueryConfig = {
      id: categoryId,
      isLive: true,
      selectFields: SHALLOW_CATEGORY_FIELDS
    };

    const categories = await this.runQueryByConfig(categoryQueryConfig);
    const category = categories?.length ? categories[0] : null;
    if (!category) throw new Error('Category does not exist.');
    const pageCategoryGroups: Array<PageCategoryGroup> = await this.articlesHttp.getLiveShallowArticlesOfCategories([category], pageSize, startPage, isForwardDir);
    if (pageCategoryGroups && pageCategoryGroups.length) {
      return pageCategoryGroups[0];
    } else {
      return null;
    }
  }

  public async getUsersOnePageShallowCategories(userId: string, isLive: boolean | null, pageSize: number = 0, startPage: string | null = null, isForwardDir: boolean = true): Promise<PageCategories> {
    const categoriesQueryConfig: QueryConfig = {
      isLive,
      userId,
      orderField: 'updated',
      orderFieldType: StructuredQueryValueType.stringValue,
      selectFields: SHALLOW_CATEGORY_FIELDS
    };

    const categories = await this.runQueryByConfig(categoriesQueryConfig);
    return this.buildPageOfCategories(categories, pageSize);
  }

  public async getAllUsersOnePageShallowCategories(isLive: boolean | null, pageSize: number = 0, startPage: string | null = null, isForwardDir: boolean = true): Promise<PageCategories> {
    const categoriesQueryConfig: QueryConfig = {
      isLive,
      orderField: 'updated',
      orderFieldType: StructuredQueryValueType.stringValue,
      selectFields: SHALLOW_CATEGORY_FIELDS
    };

    const categories = await this.runQueryByConfig(categoriesQueryConfig);
    return this.buildPageOfCategories(categories, pageSize);
  }

  public async getShallowCategoriesByIds(categoryIds: Array<string>): Promise<Array<Category>> {
    const categoriesQueryConfig: QueryConfig = {
      id: categoryIds,
      orderField: 'updated',
      orderFieldType: StructuredQueryValueType.stringValue,
      selectFields: SHALLOW_CATEGORY_FIELDS
    };

    return this.runQueryByConfig(categoriesQueryConfig);
  }
}
