import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../components/cms/category';
import { Article } from '../../components/cms/article';
import { LibConfig } from '../../app-config';
import { FirestoreParserService, StructuredQueryValueType } from '../common-firebase';
import { QueryConfig } from '../firebase.interface';
import { ARTICLES_COLLECTIONS, RUN_QUERY_KEYWORD } from './articles-firebase.constants';
import { ArticlesFirebaseHttpQueryService } from './articles-firebase-http-query.service';
import { PageArticles, PageCategoryGroup } from './articles-firebase.interface';
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
    private queryService: ArticlesFirebaseHttpQueryService
  ) {
    this.firestoreApiUrl = this.libConfig.firestoreBaseApiUrl;
  }

  private async buildPageOfArticles(articles: Array<Article>, pageSize: number = 0, startPage: string | null = null, isForwardDir: boolean = true, queryConfig: QueryConfig | null = null): Promise<PageArticles> {
    // if queryConfig is given, that means, previous and next page info will be fetched using this queryConfig.
    const articlesCount = articles?.length || 0;
    const pageArticles: PageArticles = {
      articles: articles || [],
      startPage: articlesCount ? articles[0]?.updated : null,
      endPage: articlesCount ? articles[articlesCount - 1]?.updated : null
    };

    if (articlesCount > 0 && pageSize > 0 && queryConfig) {
      //set previousPage
      if ((articlesCount === pageSize && startPage) || (articlesCount < pageSize && isForwardDir !== false && startPage)) {
        const query = { ...queryConfig, pageSize: 1, startPage: pageArticles.startPage, isForwardDir: false };
        const prevArticles = await this.runQueryByConfig(query);
        pageArticles.previousPage = prevArticles?.length > 0 ? prevArticles[0] : null;
      }

      //set nextPage
      if ((articlesCount === pageSize) || (articlesCount < pageSize && isForwardDir === false && startPage)) {
        const query = { ...queryConfig, pageSize: 1, startPage: pageArticles.endPage, isForwardDir: true };
        const nextArticles = await this.runQueryByConfig(query);
        pageArticles.nextPage = nextArticles?.length > 0 ? nextArticles[0] : null;
      }
    }

    return pageArticles;
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


  public async getLiveArticle(articleId: string): Promise<Article> {
    if (!articleId) throw new Error('Please provide a valid article id.');

    const articleQueryConfig: QueryConfig = {
      id: articleId,
      isLive: true
    };

    const articles = await this.runQueryByConfig(articleQueryConfig);
    const article = articles?.length ? articles[0] : null;
    if (!article) throw new Error('Article does not exist.');

    return article;
  }

  public async getUsersArticle(articleId: string, userId: string): Promise<Article> {
    if (!articleId) throw new Error('Please provide a valid article id.');
    if (!userId) throw new Error('Please provide a valid article id.');

    const articleQueryConfig: QueryConfig = {
      id: articleId,
      userId
    };

    const articles = await this.runQueryByConfig(articleQueryConfig);
    const article = articles?.length ? articles[0] : null;
    if (!article) throw new Error('Article does not exist.');

    return article;
  }

  public async getUsersOnePageShallowArticles(userId: string, isLive: boolean | null, pageSize: number = 0, startPage: string | null = null, isForwardDir: boolean = true): Promise<PageArticles> {
    const articlesQueryConfig: QueryConfig = {
      isLive,
      userId,
      orderField: 'updated',
      orderFieldType: StructuredQueryValueType.stringValue,
      startPage,
      pageSize,
      isForwardDir,
      isDesc: true,
      selectFields: SHALLOW_ARTICLE_FIELDS
    };
    const articles = await this.runQueryByConfig(articlesQueryConfig);

    return this.buildPageOfArticles(articles, pageSize, startPage, isForwardDir, articlesQueryConfig);
  }

  public async getAllUsersOnePageShallowArticles(isLive: boolean | null, pageSize: number = 0, startPage: string | null = null, isForwardDir: boolean = true): Promise<PageArticles> {
    const articlesQueryConfig: QueryConfig = {
      isLive,
      orderField: 'updated',
      orderFieldType: StructuredQueryValueType.stringValue,
      startPage,
      pageSize,
      isForwardDir,
      isDesc: true,
      selectFields: SHALLOW_ARTICLE_FIELDS
    };

    const articles = await this.runQueryByConfig(articlesQueryConfig);

    return this.buildPageOfArticles(articles, pageSize, startPage, isForwardDir, articlesQueryConfig);
  }

  public async getUsersOnePageInReviewShallowArticles(userId: string, pageSize: number = 0, startPage: string | null = null, isForwardDir: boolean = true): Promise<PageArticles> {
    const articlesQueryConfig: QueryConfig = {
      isLive: null,     // null | false | true equals in review | offline | live
      userId,
      orderField: 'updated',
      orderFieldType: StructuredQueryValueType.stringValue,
      startPage,
      pageSize,
      isForwardDir,
      isDesc: true,
      selectFields: SHALLOW_ARTICLE_FIELDS
    };

    const articles = await this.runQueryByConfig(articlesQueryConfig);

    return this.buildPageOfArticles(articles, pageSize, startPage, isForwardDir, articlesQueryConfig);
  }

  public async getAllUsersOnePageInReviewShallowArticles(pageSize: number = 0, startPage: string | null = null, isForwardDir: boolean = true): Promise<PageArticles> {
    const articlesQueryConfig: QueryConfig = {
      isLive: null,     // null | false | true equals in review | offline | live
      orderField: 'updated',
      orderFieldType: StructuredQueryValueType.stringValue,
      startPage,
      pageSize,
      isForwardDir,
      isDesc: true,
      selectFields: SHALLOW_ARTICLE_FIELDS
    };

    const articles = await this.runQueryByConfig(articlesQueryConfig);

    return this.buildPageOfArticles(articles, pageSize, startPage, isForwardDir, articlesQueryConfig);
  }

  public async getLiveShallowArticlesOfCategories(categories: Array<string> | Array<Category>, pageSize: number = 0, startPage: string | null = null, isForwardDir: boolean = true): Promise<Array<PageCategoryGroup>> {
    let pageCategoryGroups: Array<PageCategoryGroup> = [];

    if (categories && categories.length) {
      const categoryIds = categories.map(cat => typeof cat === 'string' ? cat : cat.id)
      const totalPageSize = pageSize > 0 ? (pageSize + 2) * categoryIds.length : pageSize;

      const catArticlesQueryConfig: QueryConfig = {
        isLive: true,
        orderField: 'updated',
        orderFieldType: StructuredQueryValueType.stringValue,
        articleCategoryId: categoryIds,
        startPage,
        pageSize: totalPageSize,
        isForwardDir,
        isDesc: true,
        selectFields: SHALLOW_ARTICLE_FIELDS
      };

      const articles = await this.runQueryByConfig(catArticlesQueryConfig);

      if (articles?.length) {
        pageCategoryGroups = await Promise.all(categories.map(async cat => {
          const catArticles = articles.filter(art => art.categories?.includes(typeof cat === 'string' ? cat : cat.id)) || [];
          // if a single category, then add pagearticles with previous and next page info else leave that info empty., so that pagination can be enebled for Category articles.
          let pageArticles;
          if(categories.length === 1) {
            pageArticles = await this.buildPageOfArticles(catArticles, pageSize, startPage, isForwardDir, catArticlesQueryConfig);
          } else {
            pageArticles = await this.buildPageOfArticles(catArticles);
          }

          const pageCategoryGroup: PageCategoryGroup = {
            category: typeof cat === 'string' ? { id: cat } as Category : cat,
            pageArticles
          }

          return pageCategoryGroup;
        }));

        return pageCategoryGroups;
      }
    }

    return pageCategoryGroups;
  }

  /*
  Shallow Category = without description
  Shallow Article = without body

  DONE - getLiveShallowArticlesOfCategories([catId] | [cats]) returns [catGroups]
  Done - getLiveArticle(id)
  DONE - getUsersArticle(userId, id)
  Done - getUsersOnePageShallowArticles(userId, isLive=null | false | true (all, offline, live), pageSize=0 (All articles) , startPage=null, isForwardDir = true)
  Done - getAllUsersOnePageShallowArticles(isLive=null | false | true (all, offline, live))
  Done - getUsersOnePageInReviewShallowArticles(userId, pageSize=0 (All articles) , startPage=null, isForwardDir = true)
  Done - getAllUsersOnePageInReviewShallowArticles(pageSize=0 (All articles) , startPage=null, isForwardDir = true)


  Add new user category
  Update Category
  publish category

  Add new user Article
  Update Article

  publish Article
  Bring Article offline
  make inReview
  */
}
