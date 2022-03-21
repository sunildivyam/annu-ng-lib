import { Injectable } from '@angular/core';

import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  writeBatch,
  WriteBatch,
  query,
  where,
  orderBy,
  startAfter,
  startAt,
  limit,
  CollectionReference,
  DocumentData,
  endBefore,
  limitToLast,
} from 'firebase/firestore';

import { Category, Article } from '../../components/cms';
import { getSeedsCategories, getSeedsArticles } from './articles-firebase.seed';
import { UtilsService } from '../../services/utils/utils.service';
import { AuthFirebaseService } from '../auth';
import { QueryConfig } from '../firebase.interface';

const FIREBASE_DOCS = {
  CATEGORIES: 'categories',
  ARTICLES: 'articles'
}


/**
 * Description placeholder
 * @date 19/2/2022 - 3:48:18 pm
 *
 * @export
 * @class ArticlesFirebaseService
 * @typedef {ArticlesFirebaseService}
 */
@Injectable({
  providedIn: 'root'
})
export class ArticlesFirebaseService {

  constructor(private utilsSvc: UtilsService, private fireAuthSvc: AuthFirebaseService) { }

  /**
   * Adds a new category for the logged in user.
   *
   * @public
   * @async
   * @param {Category} newCategory
   * @param {string} userId
   * @returns {Promise<Category>} Return the added category with a new autogenerated category id.
   */
  public async addCategory(newCategory: Category): Promise<Category> {
    return await this.setCategory(newCategory);
  }

  /**
   * Updates a category, for the logged in user.
   *
   * @public
   * @async
   * @param {Category} pCategory
   * @param {string} userId
   * @returns {Promise<Category>} returns the updated category.
   */
  public async setCategory(pCategory: Category): Promise<Category> {
    const currentDate = this.utilsSvc.currentDate;
    const category = { ...pCategory, updated: currentDate };
    if (!pCategory.created) category.created = currentDate;
    if (!pCategory.userId) category.userId = this.fireAuthSvc.getCurrentUserId();
    delete category.id;

    try {
      const db = getFirestore();
      const categoriesRef = collection(db, FIREBASE_DOCS.CATEGORIES);
      const categoryRef = doc(categoriesRef, pCategory.id);

      await setDoc(categoryRef, category);

      return { ...category, id: pCategory.id };
    } catch (error: any) {
      throw error;
    }
  }


  /**
   * Description placeholder
   * @date 9/2/2022 - 6:31:45 pm
   *
   * @public
   * @async
   * @param {Category} category
   * @returns {Promise<boolean>}
   */
  public async deleteCategory(category: Category): Promise<boolean> {
    try {
      const db = getFirestore();
      const categoriesRef = collection(db, FIREBASE_DOCS.CATEGORIES);
      const categoryRef = doc(categoriesRef, category.id);

      await deleteDoc(categoryRef);

      return true;
    } catch (error: any) {
      throw error;
    }
  }

  /**
   * Reads a category based on a category id.
   *
   * @public
   * @async
   * @param {string} id
   * @returns {Promise<Category>}
   */
  public async getCategoryById(id: string): Promise<Category> {
    try {
      const db = getFirestore();
      const querySnapshot = await getDoc(doc(db, FIREBASE_DOCS.CATEGORIES, id));
      if (!querySnapshot.exists()) {
        throw new Error(`Category with id- ${id} does not exist`);
      }

      const category: Category = {
        id: querySnapshot.id,
        ...querySnapshot.data(),
      }

      return category;
    } catch (error: any) {
      throw error;
    }
  }

  /**
   * Reads Categories based on where conditions, orderby, and pagination.</br>
   * <strong>userId:</strong> filter by user id</br>
   * <strong>name:</strong> filter by name or array of names</br>
   * <strong>id:</strong> filter by id or array of ids</br>
   * <strong>orderField:</strong> name of the orderBy field, this has to be same field that is used for startPage, if pagination is used.</br>
   * <strong>isDesc:</strong>  if true, orderBy field is sorted desc or asc order.</br>
   * <strong>isNextPages:</strong> if true, pagination will be forward else backward direction</br>
   * <strong>startPage:</strong> startPage should have the value of the orderBy field of the first or last record of previously fetched records.</br>
   * <strong>pageSize:</strong> if pageSize is les that equal to 0, then no pagination will be done</br>
   * <strong>isLive:</strong> if null, ignores filtering based on isLive. Otherwise filters documents that are published or unbulished based on true/false value.</br>
   * @date 19/2/2022 - 9:41:44 pm
   *
   * @public
   * @async
   * @param {QueryConfig} queryConfig filter using a query config
   * @returns {Promise<Array<Category>>}
   */
  public async getCategories(queryConfig: QueryConfig): Promise<Array<Category>> {
    try {
      const db = getFirestore();
      const categoriesRef = collection(db, FIREBASE_DOCS.CATEGORIES);
      const queryArgs = this.buildQuery(categoriesRef, { ...queryConfig } as QueryConfig);

      const queryRef = query.apply(this, [...queryArgs]);

      const querySnapshot = await getDocs(queryRef);
      const categories: Array<Category> = [];
      querySnapshot.forEach((doc) => {
        categories.push({
          id: doc.id,
          ...doc.data() as any,
        });
      });

      return categories;
    } catch (error: any) {
      throw error;
    }
  }



  /**
   * Adds an article, and optionally publishes it.
   * @date 19/2/2022 - 10:11:11 pm
   *
   * @public
   * @async
   * @param {Article} newArticle
   * @returns {Promise<Article>}
   */
  public async addArticle(newArticle: Article): Promise<Article> {
    return await this.setArticle(newArticle);
  }


  /**
   * Updates an article
   * @date 19/2/2022 - 10:13:21 pm
   *
   * @public
   * @async
   * @param {Article} pArticle
   * @returns {Promise<Article>}
   */
  public async setArticle(pArticle: Article): Promise<Article> {
    const currentDate = this.utilsSvc.currentDate;
    const article = { ...pArticle, updated: currentDate };
    if (!pArticle.created) article.created = currentDate;
    if (!pArticle.userId) article.userId = this.fireAuthSvc.getCurrentUserId();
    delete article.id;
    delete article.categoriesGroup;

    try {
      const db = getFirestore();
      const articlesRef = collection(db, FIREBASE_DOCS.ARTICLES);
      const articleRef = doc(articlesRef, pArticle.id);

      await setDoc(articleRef, article);

      return { ...article, id: pArticle.id };
    } catch (error: any) {
      throw error;
    }
  }


  /**
   * Deletes an article, Only user with admin rights can delete an article.
   * @date 19/2/2022 - 10:17:14 pm
   *
   * @public
   * @async
   * @param {Article} article
   * @returns {Promise<boolean>}
   */
  public async deleteArticle(article: Article): Promise<boolean> {
    try {
      const db = getFirestore();
      const articlesRef = collection(db, FIREBASE_DOCS.ARTICLES);
      const articleRef = doc(articlesRef, article.id);

      await deleteDoc(articleRef);

      return true;
    } catch (error: any) {
      throw error;
    }
  }


  /**
   * Reads a article based on a article id.
   * Add name of collectiongroup, where data population is needed, eg. categories.
   * @date 20/2/2022 - 5:05:44 pm
   *
   * @public
   * @async
   * @param {string} id
   * @param {Array<string>} [groupCollections=[]]
   * @returns {Promise<Article>}
   */
  public async getArticleById(id: string, groupCollections: Array<string> = []): Promise<Article> {

    try {
      const db = getFirestore();
      const articleRef = doc(db, FIREBASE_DOCS.ARTICLES, id);
      const querySnapshot = await getDoc(articleRef);
      if (!querySnapshot.exists()) {
        throw new Error(`Article with id- ${id} does not exist`);
      }

      const article: Article = {
        id: querySnapshot.id,
        ...querySnapshot.data(),
      }

      if (groupCollections && groupCollections.length) {
        // Add conditions for other Collection Groups, if any
        if (groupCollections.includes('categories')) {
          const qConfig: QueryConfig = {
            id: article.categories
          };
          const cats = await this.getCategories(qConfig);
          article.categoriesGroup = cats;
        }
      }

      return article;
    } catch (error: any) {
      throw error;
    }
  }


  /**
   * Reads Articles based on where conditions, orderby, and pagination.</br>
   * This method can be used for various combination of queries, articles by userid, id/s, name/s, artcileCatgoryId/s, sorting, pagination etc.</br>
   * <strong>userId:</strong> filter by user id</br>
   * <strong>name:</strong> filter by name or array of names</br>
   * <strong>id:</strong> filter by id or array of ids</br>
   * <strong>articleCategoryId:</strong> filter by articleCategoryId or array of articleCategoryIds</br>
   * <strong>orderField:</strong> name of the orderBy field, this has to be same field that is used for startPage, if pagination is used.</br>
   * <strong>isDesc:</strong>  if true, orderBy field is sorted desc or asc order.</br>
   * <strong>isNextPages:</strong> if true, pagination will be forward else backward direction</br>
   * <strong>startPage:</strong> startPage should have the value of the orderBy field of the first or last record of previously fetched records.</br>
   * <strong>pageSize:</strong> if pageSize is les that equal to 0, then no pagination will be done</br>
   * <strong>isLive:</strong> if null, ignores filtering based on isLive. Otherwise filters documents that are published or unbulished based on true/false value.</br>
   * @date 19/2/2022 - 9:41:44 pm
   *
   * @public
   * @async
   * @param {QueryConfig} queryConfig filter by queryConfig.
   * @returns {Promise<Array<Article>>}
   */
  public async getArticles(queryConfig: QueryConfig): Promise<Array<Article>> {
    try {
      const db = getFirestore();
      const articlesRef = collection(db, FIREBASE_DOCS.ARTICLES);
      const queryArgs = this.buildQuery(articlesRef, { ...queryConfig } as QueryConfig);

      const queryRef = query.apply(this, [...queryArgs]);

      const querySnapshot = await getDocs(queryRef);
      const articles: Array<Article> = [];
      querySnapshot.forEach((doc) => {
        articles.push({
          id: doc.id,
          ...doc.data() as any,
        });
      });

      return articles;
    } catch (error: any) {
      throw error;
    }
  }

  /**
   * seedDatabase() - populates the database with initial data.
   * This method needs to be run only once.
   * @date 19/2/2022 - 10:27:30 pm
   *
   * @public
   * @async
   * @param {number} [seedRecordCount=6]
   * @returns {Promise<string>}
   */
  public async seedDatabase(seedRecordCount: number = 6): Promise<string> {
    const db = getFirestore();
    const writeBatchRef: WriteBatch = writeBatch(db);
    const categoriesRef = collection(db, FIREBASE_DOCS.CATEGORIES);
    const articlesRef = collection(db, FIREBASE_DOCS.ARTICLES);

    getSeedsCategories(seedRecordCount).forEach(c => writeBatchRef.set(doc(categoriesRef), {
      ...c,
      created: this.utilsSvc.currentDate,
      userId: this.fireAuthSvc.getCurrentUserId(),
      updated: this.utilsSvc.currentDate
    }));
    getSeedsArticles(seedRecordCount).forEach(a => writeBatchRef.set(doc(articlesRef), {
      ...a,
      created: this.utilsSvc.currentDate,
      updated: this.utilsSvc.currentDate,
      userId: this.fireAuthSvc.getCurrentUserId(),
      metaInfo: { ...a.metaInfo, 'article:published_time': this.utilsSvc.currentDate }
    }));

    try {
      await writeBatchRef.commit();
      return 'SUCCESSFUL Seeding Articles firestore';
    } catch (error: any) {
      throw error;
    }
  }

  /**
   * Builds a read query, with where conditions, orderby, and pagination attributes.
   * @date 19/2/2022 - 10:27:58 pm
   *
   * @public
   * @param {CollectionReference<DocumentData>} documentsRef
   * @param {QueryConfig} queryConfig
   * @returns {Array<any>}
   */
  public buildQuery(documentsRef: CollectionReference<DocumentData>, queryConfig: QueryConfig): Array<any> {
    const queryArgs: Array<any> = [documentsRef];

    const { userId, id, articleCategoryId, isLive, orderField, isDesc, isNextPages, startPage, pageSize } = queryConfig;

    // if userid is given, then fetches categories of that user only, else will fetch all categories
    if (userId) {
      queryArgs.push(where('userId', '==', userId));
    }

    if (id) {
      const opr = id instanceof Array ? 'in' : '==';
      queryArgs.push(where('__name__', opr, id));
    }

    if (articleCategoryId) {
      const opr = articleCategoryId instanceof Array ? 'array-contains-any' : 'array-contains';
      queryArgs.push(where('categories', opr, articleCategoryId));
    }
    // add condition only when either true or false. if null, then not add condition, and fetch irrespective of isLive
    if (isLive === true || isLive === false) {
      queryArgs.push(where('isLive', '==', isLive));
    }

    if (orderField) {
      queryArgs.push(orderBy(orderField, isDesc ? 'desc' : 'asc'));
    }

    if (orderField && pageSize >= 1) {
      if (isNextPages) {
        queryArgs.push(limit(pageSize));
        if (startPage) {
          queryArgs.push(startAfter(startPage));
        }
      } else {
        queryArgs.push(limitToLast(pageSize));
        if (startPage) {
          queryArgs.push(endBefore(startPage));
        }
      }
    }

    return queryArgs;
  }
}

//TODO: Add Group Queries.
