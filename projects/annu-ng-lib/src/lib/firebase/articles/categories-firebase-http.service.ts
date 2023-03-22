import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LibConfig } from '../../app-config';
import { Category, CategoryFeatures } from '../../components/cms/category';
import { UtilsService } from '../../services/utils/utils.service';
import { AuthFirebaseService } from '../auth/auth-firebase.service';
import { FirestoreParserService } from '../common-firebase/firestore-parser.service';
import { StructuredQueryValueType } from '../common-firebase/common-firebase.interface';
import { QueryConfig } from '../firebase.interface';
import { ArticlesFirebaseHttpQueryService } from './articles-firebase-http-query.service';
import { SHALLOW_CATEGORY_FIELDS, UPDATE_CATEGORY_FIELDS } from './articles-firebase-http.contants';
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
    private queryService: ArticlesFirebaseHttpQueryService,
    private articlesHttp: ArticlesFirebaseHttpService,
    private utilsSvc: UtilsService,
    private fireAuthSvc: AuthFirebaseService,
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

  public async runQueryToUpdate(category: Category, fieldsToUpdate: Array<string>, isBin: boolean = false): Promise<Category> {
    if (!category || !category.id) throw new Error('Please provide a valid category.');
    const currentDate = this.utilsSvc.currentDate;
    const pCategory = { ...category, updated: currentDate };
    pCategory.metaInfo['article:published_time'] = currentDate;
    if (!pCategory.created) pCategory.created = currentDate;
    if (!pCategory.userId) pCategory.userId = this.fireAuthSvc.getCurrentUserId();
    delete pCategory.id;

    return new Promise((resolve, reject) => {
      const url = `${this.firestoreApiUrl}/${isBin === true ? ARTICLES_COLLECTIONS.CATEGORIES_BIN : ARTICLES_COLLECTIONS.CATEGORIES}/${category.id}`;
      const body = this.firestoreParser.buildFirebaseFields(pCategory, fieldsToUpdate);
      const params = this.firestoreParser.buildQueryParamsToUpdate(fieldsToUpdate);

      const httpSubscription = this.http.patch(url, body, { params })
        .subscribe({
          next: (cat: any) => {
            const updatedCategory: Category = this.firestoreParser.parse(cat) as Category;
            httpSubscription.unsubscribe();
            resolve(updatedCategory);
          },
          error: reject
        });

    });
  }

  public async runQueryToDelete(category: Category): Promise<boolean> {
    if (!category || !category.id) throw new Error('Please provide a valid category.');

    return new Promise((resolve, reject) => {
      // Move category to categories-bin first then delete it from categories db.
      this.runQueryToUpdate(category, null, true)
        .then(() => {
          const url = `${this.firestoreApiUrl}/${ARTICLES_COLLECTIONS.CATEGORIES}/${category.id}`;
          // Deletes from categories db.
          const httpSubscription = this.http.delete(url)
            .subscribe({
              next: (res: any) => {
                httpSubscription.unsubscribe();
                resolve(true);
              },
              error: reject
            });
        })
        .catch(reject);
    });
  }

  public async getCategory(categoryId: string): Promise<Category> {
    try {
      const category = await this.runQueryById(categoryId);
      return category;
    } catch (error: any) {
      throw error;
    }
  }

  public async getUsersCategory(userId: string, categoryId: string): Promise<Category> {
    if (!userId) throw new Error('Please provide a valid user id.');
    if (!categoryId) throw new Error('Please Provide a valid category id.');

    const categoryQueryConfig: QueryConfig = {
      id: categoryId,
      userId
    };
    try {
      const categories = await this.runQueryByConfig(categoryQueryConfig);
      const category = categories?.length && categories[0] || null;

      return category;
    } catch (error: any) {
      throw error;
    }
  }

  public async getAllLiveCategoriesWithOnePageShallowArticles(pageSize: number = 0, startPage: string | null = null, isForwardDir: boolean = true): Promise<Array<PageCategoryGroup>> {
    const categoriesQueryConfig: QueryConfig = {
      isLive: true,
      orderField: 'updated',
      orderFieldType: StructuredQueryValueType.stringValue,
      selectFields: SHALLOW_CATEGORY_FIELDS
    };
    try {
      const categories = await this.runQueryByConfig(categoriesQueryConfig);
      return await this.articlesHttp.getLiveShallowArticlesOfCategories(categories, pageSize, startPage, isForwardDir);
    } catch (error: any) {
      throw error;
    }
  }

  public async getLiveCategoryWithOnePageShallowArticles(categoryId: string, pageSize: number = 0, startPage: string | null = null, isForwardDir: boolean = true): Promise<PageCategoryGroup> {
    if (!categoryId) throw new Error('Please provide a valid category id.');

    const categoryQueryConfig: QueryConfig = {
      id: categoryId,
      isLive: true,
      selectFields: SHALLOW_CATEGORY_FIELDS
    };

    try {
      const categories = await this.runQueryByConfig(categoryQueryConfig);
      const category = categories?.length && categories[0] || null;
      if (category) {
        const pageCategoryGroups: Array<PageCategoryGroup> = await this.articlesHttp.getLiveShallowArticlesOfCategories([category], pageSize, startPage, isForwardDir);
        return pageCategoryGroups?.length && pageCategoryGroups[0] || null;
      }

      return null;
    } catch (error: any) {
      throw error;
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
    try {
      const categories = await this.runQueryByConfig(categoriesQueryConfig);
      return await this.buildPageOfCategories(categories, pageSize);
    } catch (error: any) {
      throw error;
    }
  }

  public async getAllUsersOnePageShallowCategories(isLive: boolean | null, pageSize: number = 0, startPage: string | null = null, isForwardDir: boolean = true): Promise<PageCategories> {
    const categoriesQueryConfig: QueryConfig = {
      isLive,
      orderField: 'updated',
      orderFieldType: StructuredQueryValueType.stringValue,
      selectFields: SHALLOW_CATEGORY_FIELDS
    };
    try {
      const categories = await this.runQueryByConfig(categoriesQueryConfig);
      return await this.buildPageOfCategories(categories, pageSize);
    } catch (error: any) {
      throw error;
    }
  }

  public async getShallowCategoriesByIds(categoryIds: Array<string>): Promise<Array<Category>> {
    const categoriesQueryConfig: QueryConfig = {
      id: categoryIds,
      orderField: 'updated',
      orderFieldType: StructuredQueryValueType.stringValue,
      selectFields: SHALLOW_CATEGORY_FIELDS
    };
    try {
      return await this.runQueryByConfig(categoriesQueryConfig);
    } catch (error: any) {
      throw error;
    }
  }

  public async getShallowLiveCategoriesByFeatures(features: CategoryFeatures | Array<CategoryFeatures>, isLive: boolean = true): Promise<Array<Category>> {
    const categoriesQueryConfig: QueryConfig = {
      isLive,
      features,
      orderField: 'updated',
      orderFieldType: StructuredQueryValueType.stringValue,
      selectFields: SHALLOW_CATEGORY_FIELDS
    };
    try {
      return await this.runQueryByConfig(categoriesQueryConfig);
    } catch (error: any) {
      throw error;
    }
  }


  /**
   * Get all Live categories since the given last updated, by date.
   * @date 2/27/2023 - 6:40:21 PM
   *
   * @public
   * @async
   * @param {string} fromDateTime
   * @returns {Promise<Array<Category>>}
   */
  public async getAllLiveCategoriesFromDate(fromDateTime: string): Promise<Array<Category>> {
    const categoriesQueryConfig: QueryConfig = {
      isLive: true,
      orderField: 'updated',
      updated: fromDateTime,
      orderFieldType: StructuredQueryValueType.stringValue,
      selectFields: ['updated']
    };
    try {
      const categories = await this.runQueryByConfig(categoriesQueryConfig);
      return categories;
    } catch (error: any) {
      throw error;
    }
  }

  public async addCategory(category: Category): Promise<Category> {
    const fieldsToUpdate = [...UPDATE_CATEGORY_FIELDS, 'isLive'];
    // Any modification to a category, will bring it to unpublished, and not up for review.
    category.isLive = false;
    category.inReview = false;
    const existedCategory = await this.getCategory(category.id).catch((error: HttpErrorResponse) => {
      if (error.status === 404) {
        return null;
      } else {
        throw error;
      }
    });
    if (existedCategory) throw new Error("Category already Exist.");
    return this.runQueryToUpdate(category, fieldsToUpdate).catch(error => {
      throw error;
    });
  }

  public async updateCategory(category: Category): Promise<Category> {

    const fieldsToUpdate = [...UPDATE_CATEGORY_FIELDS, 'isLive'];

    // Any modification to a category, will bring it to unpublished, and not up for review.
    category.isLive = false;
    category.inReview = false;

    return this.runQueryToUpdate(category, fieldsToUpdate).catch(error => {
      throw error;
    });
  }

  public async setCategoryUpForReview(category: Category): Promise<Category> {

    const fieldsToUpdate = ['inReview', 'isLive', 'updated', 'metaInfo'];

    // Any modification to a category, will bring it to unpublished, and not up for review.
    category.isLive = category.inReview === true ? false : category.isLive;

    return this.runQueryToUpdate(category, fieldsToUpdate).catch(error => {
      throw error;
    });
  }

  public async setCategoryLive(category: Category): Promise<Category> {

    const fieldsToUpdate = ['inReview', 'isLive', 'updated', 'metaInfo'];

    // Any modification to a category, will bring it to unpublished, and not up for review.

    category.inReview = category.isLive === true ? false : category.inReview;

    return this.runQueryToUpdate(category, fieldsToUpdate).catch(error => {
      throw error;
    });
  }

  public async deleteCategory(category: Category): Promise<boolean> {
    return this.runQueryToDelete(category);
  }
}
