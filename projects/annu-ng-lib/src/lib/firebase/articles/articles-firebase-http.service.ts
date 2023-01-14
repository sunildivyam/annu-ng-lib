import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../components/cms/category';
import { Article } from '../../components/cms/article';
import { LibConfig } from '../../app-config';
import { FirestoreParserService, StructuredQueryValueType } from '../common-firebase';
import { QueryConfig } from '../firebase.interface';
import { ARTICLES_COLLECTIONS, RUN_QUERY_KEYWORD } from './articles-firebase.constants';
import { ArticlesFirebaseHttpQueryService } from './articles-firebase-http-query.service';
import { AuthFirebaseService } from '../auth';
import { CategoryGroup_Temp } from './articles-firebase.interface';
import { SHALLOW_ARTICLE_FIELDS } from './articles-firebase-http.contants';

@Injectable({
  providedIn: 'root'
})
export class ArticlesFirebaseHttpService {

  firestoreApiUrl: string = '';

  constructor(
    private libConfig: LibConfig,
    private http: HttpClient,
    private firestoreParser: FirestoreParserService,
    private authService: AuthFirebaseService,
    private queryService: ArticlesFirebaseHttpQueryService
  ) {
    this.firestoreApiUrl = this.libConfig.firestoreBaseApiUrl;
  }

  public async runQueryById(id: string): Promise<Article> {
    return new Promise((resolve, reject) => {
      if (!id) {
        reject('Please provide a valid article Id');
      } else {
        const url = `${this.firestoreApiUrl}/${ARTICLES_COLLECTIONS.ARTICLES}/${id}`;
        const httpSubscription = this.http.get(url).subscribe({
          next: (art: any) => {
            const article: Article = this.firestoreParser.parse(art) as Article;
            httpSubscription.unsubscribe();
            resolve(article);
          },
          error: reject
        });
      }
    });
  }

  public async runQueryByConfig(queryConfig: QueryConfig): Promise<Array<Article>> {
    return new Promise((resolve, reject) => {
      const url = `${this.firestoreApiUrl}${RUN_QUERY_KEYWORD}`;

      const httpSubscription = this.http.post(url, this.queryService.buildStructuredQuery(ARTICLES_COLLECTIONS.ARTICLES, queryConfig))
        .subscribe({
          next: (arts: any) => {
            const articles: Array<Article> = this.firestoreParser.parse(arts) as Array<Article>;
            httpSubscription.unsubscribe();
            resolve(articles);
          },
          error: reject
        });

    });
  }

  public async getArticle(articleId: string): Promise<Article> {
    return this.runQueryById(articleId);
  }



  public async getLiveShallowArticlesOfCategories(categories: Array<string> | Array<Category>, pageSize: number = 0, startPage: string | null = null, isForwardDir: boolean = true): Promise<Array<CategoryGroup_Temp>> {
    let categoryGroups: Array<CategoryGroup_Temp> = [];

    if (categories && categories.length) {
      const categoryIds = categories.map(cat => typeof cat === 'string' ? cat : cat.id)

      const catArticlesQueryConfig: QueryConfig = {
        isLive: true,
        orderField: 'updated',
        orderFieldType: StructuredQueryValueType.stringValue,
        articleCategoryId: categoryIds,
        startPage,
        pageSize: pageSize > 0 ? pageSize * categoryIds.length : pageSize,
        isForwardDir,
        isDesc: true,
        selectFields: SHALLOW_ARTICLE_FIELDS
      };

      const articles = await this.runQueryByConfig(catArticlesQueryConfig);

      if (articles?.length) {
        categoryGroups = categories.map(cat => {
          const catArticles = articles.filter(art => art.categories?.includes(typeof cat === 'string' ? cat : cat.id)) || [];
          const categoryGroup: CategoryGroup_Temp = {
            category: typeof cat === 'string' ? { id: cat } as Category : cat,
            articles: catArticles,
            startPage: catArticles && catArticles[0]?.updated || null,
            endPage: catArticles && catArticles[catArticles.length - 1]?.updated || null,
          }

          return categoryGroup;
        })
        return categoryGroups;
      }
    }
    return categoryGroups;
  }

  /*
  Shallow Category = without description
  Shallow Article = without body

  DONE - getLiveShallowArticlesOfCategories([catId] | [cats]) returns [catGroups]
  getLiveArticle(id)
  getUsersArticle(userId, id)
  getUsersOnePageShallowArticles(userId, isLive=null | false | true (all, offline, live), pageSize=0 (All articles) , startPage=null, isForwardDir = true)
  getAllUsersShallowArticles(isLive=null | false | true (all, offline, live))

  getUsersOnePageInReviewShallowArticles(userId, pageSize=0 (All articles) , startPage=null, isForwardDir = true)
  getAllUsersOnePageInReviewShallowArticles(pageSize=0 (All articles) , startPage=null, isForwardDir = true)


  Add new user category
  Update Category
  publish category

  Add new user Article
  Update Article

  publish Article
  Bring Article offline
  make inReview
  */

  public async getCategoryById(id: string): Promise<Category> {
    return new Promise((resolve, reject) => {
      if (!id) {
        reject('Please add a valid category Id');
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

  /**
   * Reads all Categories</br>
   *
   * @public
   * @async
   * @param {QueryConfig} queryConfig filter using a query config
   * @returns {Promise<Array<Category>>}
   */
  public async getCategories(queryConfig: QueryConfig): Promise<Array<Category>> {
    const token = await this.authService.getAccessToken();

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

  /**
     * Reads an article based on a article id.
     *
     * @public
     * @async
     * @param {string} id
     * @returns {Promise<Article>}
     */
  public async getArticleById(id: string): Promise<Article> {
    return new Promise((resolve, reject) => {
      if (!id) {
        reject('Please add a valid article Id');
      } else {
        const url = `${this.firestoreApiUrl}/${ARTICLES_COLLECTIONS.ARTICLES}/${id}?key=${this.libConfig?.firebase?.apiKey || ''}`;
        const httpSubscription = this.http.get(url).subscribe({
          next: (c: any) => {
            const article: Article = this.firestoreParser.parse(c) as Article;
            httpSubscription.unsubscribe();
            resolve(article);
          },
          error: reject
        });
      }
    });
  }

  /**
   * Reads Articles</br>
   *
   * @public
   * @async
   * @param {QueryConfig} queryConfig filter using a query config
   * @returns {Promise<Array<Article>>}
   */
  public async getArticles(queryConfig: QueryConfig): Promise<Array<Article>> {
    const token = await this.authService.getAccessToken();

    return new Promise((resolve, reject) => {
      const url = `${this.firestoreApiUrl}${RUN_QUERY_KEYWORD}`;

      const httpSubscription = this.http.post(url, this.queryService.buildStructuredQuery(ARTICLES_COLLECTIONS.ARTICLES, queryConfig),
        {
          // headers: {
          //   Authorization: `Bearer ${token}`
          // },
          // params: {
          //   key: this.libConfig?.firebase?.apiKey || ''
          // }
        })
        .subscribe({
          next: (cats: any) => {
            const categories: Array<Article> = this.firestoreParser.parse(cats) as Array<Article>;
            httpSubscription.unsubscribe();
            resolve(categories);
          },
          error: reject
        });

    });
  }

}
