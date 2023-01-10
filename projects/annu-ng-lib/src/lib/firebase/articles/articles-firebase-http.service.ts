import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../components/cms/category';
import { Article } from '../../components/cms/article';
import { LibConfig } from '../../app-config';
import { FirestoreParserService } from '../common-firebase';
import { QueryConfig } from '../firebase.interface';
import { ARTICLES_COLLECTIONS, RUN_QUERY_KEYWORD } from './articles-firebase.constants';
import { ArticlesFirebaseHttpQueryService } from './articles-firebase-http-query.service';
import { AuthFirebaseService } from '../auth';

@Injectable({
  providedIn: 'root'
})
export class ArticlesFirebaseHttpService {
  firestoreApiUrl: string = '';

  constructor(private libConfig: LibConfig, private http: HttpClient, private firestoreParser: FirestoreParserService, private queryService: ArticlesFirebaseHttpQueryService, private authService: AuthFirebaseService) {
    this.firestoreApiUrl = this.libConfig.firestoreBaseApiUrl;
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

      const httpSubscription = this.http.post(url, this.queryService.buildStructuredQuery(ARTICLES_COLLECTIONS.CATEGORIES, queryConfig),
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
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
      const url = `${this.firestoreApiUrl}/${ARTICLES_COLLECTIONS.ARTICLES}/${id}`;
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
          headers: {
            Authorization: `Bearer ${token}`
          }
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
