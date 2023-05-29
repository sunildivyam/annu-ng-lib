import { Injectable } from '@angular/core';
import { Article } from '../article/article.interface';
import { UtilsService } from '../../../services/utils/utils.service';
import { ImageInfo } from '../../common-ui/image-form/image-form.interface';
import {
  EditorElement,
  EditorElementData,
} from '../content-editor/content-editor.interface';
import { MetaInfo } from '../../common-ui/meta/meta.interface';
import { META_ALLOWED_VALUES } from '../../common-ui/meta/constants';
import { AppConfig, LibConfig } from '../../../app-config/app-config.interface';
import { OpenaiService } from '../../../openai/openai.service';
import {
  CONTENT_PROMPT_PREFIX,
  DESCRIPTION_PROMPT_PREFIX,
  KEYWORDS_PROMPT_PREFIX,
  OPENAI_REQUESTS_LIMIT,
  OPENAI_REQUEST_TIME_LIMIT,
} from './constants';
import { Html2JsonService } from '../content-editor/services/html2json.service';
import { AuthFirebaseService } from '../../../firebase/auth/auth-firebase.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleEditorService {
  article$ = new BehaviorSubject<Article>({});

  constructor(
    private utilsService: UtilsService,
    private openaiService: OpenaiService,
    private html2JsonService: Html2JsonService,
    private libConfig: LibConfig,
    private authService: AuthFirebaseService
  ) {}

  public get article(): Observable<Article> {
    return this.article$.asObservable();
  }

  public createInitializedArticle(articleTitle: string, appConfig: AppConfig): Article {
    return {
      id: this.utilsService.getUniqueFromString(articleTitle),
      metaInfo: {
        title: articleTitle,
        description: '',
        keywords: '',
        robots: META_ALLOWED_VALUES.robots[0].name,
        'Content-Type': META_ALLOWED_VALUES.contentTypes[0].name,
        language: META_ALLOWED_VALUES.languages[0].name,
        'revisit-after': '7 days',
        author: appConfig?.metaInfo?.author,
        type: META_ALLOWED_VALUES.types[0].name,
        image: '',
        url: '', // will be updated post assignment
        card: META_ALLOWED_VALUES.cards[0].name,
        site_name: appConfig?.metaInfo?.title,
        audio: '',
        video: '',
        'article:published_time': this.utilsService.currentDate,
        'article:author': appConfig?.metaInfo && appConfig?.metaInfo['article:author'],
        'article:section': META_ALLOWED_VALUES.articleSections[0].name,
        'article:tag': '', // will be updated post assignment
      } as MetaInfo,
      image: {
        src: '',
        alt: articleTitle,
      } as ImageInfo,
      body: {} as EditorElement,
      categories: [],
      created: this.utilsService.currentDate,
      updated: this.utilsService.currentDate,
      userId: this.authService.getCurrentUserId(),
      isLive: false,
      inReview: true,
      features: [],
    };
  }
  public async generateArticleFromOpenai(
    articleTitle: string,
    appConfig: AppConfig,
    keyWordsPromptPrefix: string,
    descriptionPromptPrefix: string,
    contentPromptPrefix: string
  ): Promise<Article> {
    const timeStarted = Date.now();

    const article: Article = this.createInitializedArticle(articleTitle, appConfig);
    this.article$.next(article);

    // set title prompt content for article body
    article.body = await this.generateArticleContentFromOpenai(
      articleTitle, // article title content.
      contentPromptPrefix
    );
    this.article$.next(article);

    // set keywords
    article.metaInfo.keywords = (
      await this.generateArticleKeywordsFromOpenai(
        articleTitle,
        keyWordsPromptPrefix
      )
    ).join(', ');
    article.metaInfo['article:tag'] = article.metaInfo.keywords;
    this.article$.next(article);

    // set description
    article.metaInfo.description =
      (await this.generateArticleDescriptionFromOpenai(
        articleTitle,
        descriptionPromptPrefix
      )) || '';
    this.article$.next(article);

    // Delay if OPENAI_REQUEST_TIME_LIMIT API time limit is not completed yet.
    const millisecondsEllapsed: number = Date.now() - timeStarted;
    if (millisecondsEllapsed < OPENAI_REQUEST_TIME_LIMIT) {
      await this.utilsService.delay(
        OPENAI_REQUEST_TIME_LIMIT - millisecondsEllapsed
      );
    }

    // set body
    article.body = await this.generateArticleBodyFromOpenai(
      article.metaInfo.keywords.split(', '), // suheading are actually keywords
      contentPromptPrefix
    );
    this.article$.next(article);

    // set url/canonical
    article.metaInfo.url = this.generateArticleUrl(
      article.id,
      article.categories
    );

    // set image
    article.metaInfo.image = article.image.src;

    return article;
  }

  public async generateArticleDescriptionFromOpenai(
    articleTitle: string,
    descriptionPromptPrefix: string
  ): Promise<string> {
    const promptText = `${
      descriptionPromptPrefix || DESCRIPTION_PROMPT_PREFIX
    }${articleTitle}`;

    const mdText = await this.openaiService.getChatResponse([promptText]);
    const jsonEl = this.html2JsonService.html2json(
      this.html2JsonService.md2html(mdText)
    );

    return this.readDescriptionFromEditorElement(jsonEl);
  }

  public async generateArticleKeywordsFromOpenai(
    articleTitle: string,
    descriptionPromptPrefix: string
  ): Promise<Array<string>> {
    const promptText = `${
      descriptionPromptPrefix || KEYWORDS_PROMPT_PREFIX
    }${articleTitle}`;

    const mdText = await this.openaiService.getChatResponse([promptText]);
    const jsonEl = this.html2JsonService.html2json(
      this.html2JsonService.md2html(mdText)
    );

    return this.readKeywordsFromEditorElement(jsonEl);
  }

  public async generateArticleContentFromOpenai(
    articleTitle: string,
    contentPromptPrefix: string
  ): Promise<EditorElement> {
    const promptText = `${
      contentPromptPrefix || CONTENT_PROMPT_PREFIX
    }${articleTitle}`;

    const mdText = await this.openaiService.getChatResponse([promptText]);
    const jsonEl = this.html2JsonService.html2json(
      this.html2JsonService.md2html(mdText)
    );

    return jsonEl;
  }

  public async generateArticleBodyFromOpenai(
    articleSubHeadings: Array<string>,
    contentPromptPrefix: string
  ): Promise<EditorElement> {
    let body: EditorElement = this.utilsService.deepCopy(
      this.article$.value.body
    );

    for (let i = 0; i < articleSubHeadings.length; i += OPENAI_REQUESTS_LIMIT) {
      const timeStarted = Date.now();
      const chunkSubHeadings = articleSubHeadings.slice(
        i,
        i + OPENAI_REQUESTS_LIMIT
      );
      const chunkPromises = chunkSubHeadings.map((promptText) =>
        this.generateArticleContentFromOpenai(
          promptText,
          contentPromptPrefix
        )
      );
      const chunkJsonElms = await Promise.all(chunkPromises);

      chunkJsonElms.forEach((jsonEl, index) => {
        const subHeadingEl: EditorElement = this.generateArticleSubheading(
          articleSubHeadings[i + index]
        );
        body.children = body.children.concat(subHeadingEl, jsonEl.children);
      });

      // Inform article body generation progress of the subheadings
      const tempArticle: Article = this.utilsService.deepCopy(
        this.article$.value
      );
      tempArticle.body = body;
      this.article$.next(tempArticle);

      // Delay if OPENAI_REQUEST_TIME_LIMIT API time limit is not completed yet.
      const millisecondsEllapsed: number = Date.now() - timeStarted;
      if (
        millisecondsEllapsed < OPENAI_REQUEST_TIME_LIMIT &&
        i + OPENAI_REQUESTS_LIMIT < articleSubHeadings.length
      ) {
        await this.utilsService.delay(
          OPENAI_REQUEST_TIME_LIMIT - millisecondsEllapsed
        );
      }
    }

    return body;
  }

  public generateArticleUrl(
    articleId: string,
    articleCategories: Array<string>
  ): string {
    articleCategories = articleCategories || [];
    const canonicalCategoryId = articleCategories.length
      ? articleCategories[0]
      : '';

    return `${this.libConfig.apiBaseUrl}/${canonicalCategoryId}/${articleId}`;
  }

  public readDescriptionFromEditorElement(el: EditorElement): string {
    let str = [];
    if (el.tagName.toLowerCase() === 'p' && el.data?.text) {
      str.push(el.data.text);
    }

    if (el.children && el.children.length) {
      el.children.forEach((chEl) => {
        const chStr = this.readDescriptionFromEditorElement(chEl);
        str.push(chStr);
      });
    }

    return str.join(' ');
  }

  public readKeywordsFromEditorElement(el: EditorElement): Array<string> {
    let str: Array<string> = [];
    if (['ul', 'ol'].includes(el.tagName.toLowerCase())) {
      el.children.forEach((chEl) => {
        if (chEl.tagName.toLowerCase() === 'li' && chEl.data?.text) {
          str.push(chEl.data.text);
        }
      });
    }

    if (el.children && el.children.length) {
      el.children.forEach((chEl) => {
        const chStr = this.readKeywordsFromEditorElement(chEl);
        if (chStr && chStr.length) {
          str = str.concat(chStr);
        }
      });
    }

    return str;
  }

  public generateArticleSubheading(subHeadingText: string): EditorElement {
    const editorEl: EditorElement = {
      name: `h2-${Date.now()}`,
      tagName: 'h2',
      isContainer: false,
      focused: false,
      data: { text: subHeadingText } as EditorElementData,
    };

    return editorEl;
  }

  public generateArticleImageUrl(imageFullPath: string): string {
    return `${this.libConfig.imagesSourceUrl}${imageFullPath}`
  }
}
