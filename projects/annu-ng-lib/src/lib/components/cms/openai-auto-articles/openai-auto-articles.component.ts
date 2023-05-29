import { Component, Input } from '@angular/core';
import { UtilsService } from '../../../services/utils/utils.service';
import { ArticleEditorService } from '../article-editor/article-editor.service';
import { Html2JsonService } from '../content-editor/services/html2json.service';
import { OpenaiService } from '../../../openai/openai.service';
import {
  OpenaiPromptQueueItem,
  OpenaiPromptQueueItemStatus,
  OpenaiArticleQueueItem,
  OpenaiPromptQueueBatch,
} from './openai-auto-articles.interface';
import {
  OpenaiPrompt,
  OpenaiPromptType,
} from '../../common-ui/openai-form/openai-form.interface';
import {
  DESCRIPTION_PROMPT_NAME,
  EMPTY_PROMPT_QUEUE_ITEM,
  KEYWORDS_PROMPT_NAME,
  DESCRIPTION_PROMPT_PREFIX,
  KEYWORDS_PROMPT_PREFIX,
  OPENAI_MAX_REQUEST_COUNT,
  OPENAI_MAX_REQUEST_DELAY,
  OPENAI_FAILED_REQUEST_DELAY,
  SUBTOPICS_PROMPT_PREFIX,
  SUBTOPICS_PROMPT_NAME,
  QUESTIONS_PROMPT_PREFIX,
  QUESTIONS_PROMPT_NAME,
} from './openai-auto-articles.constants';
import { Article } from '../article/article.interface';
import { AppConfig } from '../../../app-config/app-config.interface';
import { ArticlesFirebaseHttpService } from '../../../firebase/articles/articles-firebase-http.service';
import { EditorElement } from '../content-editor';

@Component({
  selector: 'anu-openai-auto-articles',
  templateUrl: './openai-auto-articles.component.html',
  styleUrls: ['./openai-auto-articles.component.scss'],
})
export class OpenaiAutoArticlesComponent {
  @Input() openaiArticleQueue: Array<OpenaiArticleQueueItem> = [];
  @Input() openaiPromptQueueIndex: number = 0; // inprogress prompt index
  @Input() openaiArticleQueueIndex: number = 0; // inprogress article index
  @Input() appConfig: AppConfig = null;

  errorMsg: Array<string> = [];
  isQueuePaused: boolean = true;
  isQueueStarted: boolean = false;
  isQueueFinished: boolean = false;
  promptQueueBatchJustBeforePause: OpenaiPromptQueueBatch = null;
  historyPrompts: Array<OpenaiPrompt> = [];

  //Timers
  expectedTotalTime: number = 0;
  ellapsedTime: number = 0;
  queueInterval: any = null;
  batchStartTime: number = 0;

  constructor(
    private utilsService: UtilsService,
    private aeService: ArticleEditorService,
    private openaiService: OpenaiService,
    private html2json: Html2JsonService,
    private articlesFirebaseService: ArticlesFirebaseHttpService
  ) {}

  public startTimer(): void {
    this.stopTimer();
    this.queueInterval = setInterval(() => {
      this.ellapsedTime++;
    }, 1000);
  }

  public stopTimer(): void {
    clearInterval(this.queueInterval);
  }

  public pauseQueue(): void {
    this.isQueuePaused = true;
    this.stopTimer();
  }

  public startQueue(): void {
    this.isQueuePaused = false;
    this.isQueueStarted = true;
    this.isQueueFinished = false;
    this.startTimer();
    this.processQueue(null);
  }

  public stopQueue(): void {
    this.isQueuePaused = false;
    this.isQueueStarted = true;
    this.isQueueFinished = true;
    this.stopTimer();
  }

  public togglePauseQueue(): void {
    if (this.isQueuePaused) {
      this.startQueue();
    } else {
      this.pauseQueue();
    }
  }

  public onNewPrompt(prompts: Array<OpenaiPrompt>): void {
    const prompt =
      (prompts && prompts.length && prompts[prompts.length - 1]) || null;
    if (!prompt) return;

    // Create a new articleQueue item and add its first prompts.
    this.addToArticleQueue(prompt);
  }

  public createOpenaiPromptQueueItem(
    prompt: OpenaiPrompt,
    promptType: OpenaiPromptType = OpenaiPromptType.content
  ): OpenaiPromptQueueItem {
    if (!prompt) return null;

    const promptQueueItem: OpenaiPromptQueueItem = {
      name: prompt.prompt,
      prompt: this.utilsService.deepCopy(prompt),
      status: OpenaiPromptQueueItemStatus.notstarted,
      timeTaken: 0,
    };

    switch (promptType) {
      case OpenaiPromptType.description:
        promptQueueItem.name = DESCRIPTION_PROMPT_NAME;
        promptQueueItem.prompt.promptType = OpenaiPromptType.description;
        promptQueueItem.prompt.prompt = `${DESCRIPTION_PROMPT_PREFIX} ${promptQueueItem.prompt.prompt}`;

        break;
      case OpenaiPromptType.keywords:
        promptQueueItem.name = KEYWORDS_PROMPT_NAME;
        promptQueueItem.prompt.promptType = OpenaiPromptType.keywords;
        promptQueueItem.prompt.prompt = `${KEYWORDS_PROMPT_PREFIX} ${promptQueueItem.prompt.prompt}`;
        break;
      case OpenaiPromptType.subtopics:
        promptQueueItem.name = SUBTOPICS_PROMPT_NAME;
        promptQueueItem.prompt.promptType = OpenaiPromptType.subtopics;
        promptQueueItem.prompt.prompt = `${SUBTOPICS_PROMPT_PREFIX} ${promptQueueItem.prompt.prompt}`;
        break;
      case OpenaiPromptType.questions:
        promptQueueItem.name = QUESTIONS_PROMPT_NAME;
        promptQueueItem.prompt.promptType = OpenaiPromptType.questions;
        promptQueueItem.prompt.prompt = `${QUESTIONS_PROMPT_PREFIX} ${promptQueueItem.prompt.prompt}`;
        break;
      default:
        promptQueueItem.prompt.promptType = OpenaiPromptType.content;
    }

    return promptQueueItem;
  }

  public addToArticleQueue(prompt: OpenaiPrompt): void {
    if (!prompt) return;
    // Article's first prompt
    const promptQueueItem = this.createOpenaiPromptQueueItem(prompt);

    // Article's (subtopics prompt)
    const subtopicsPromptQueueItem = this.createOpenaiPromptQueueItem(
      prompt,
      OpenaiPromptType.subtopics
    );

    // Article's (questions prompt)
    const questionsPromptQueueItem = this.createOpenaiPromptQueueItem(
      prompt,
      OpenaiPromptType.questions
    );

    // Article's (description prompt)
    const descriptionPromptQueueItem = this.createOpenaiPromptQueueItem(
      prompt,
      OpenaiPromptType.description
    );

    // Article's (keywords prompt)
    const keywordsPromptQueueItem = this.createOpenaiPromptQueueItem(
      prompt,
      OpenaiPromptType.keywords
    );

    const openaiArticleQueueItem: OpenaiArticleQueueItem = {
      name: prompt.prompt,
      openaiPromptQueue: [
        promptQueueItem,
        subtopicsPromptQueueItem,
        questionsPromptQueueItem,
        keywordsPromptQueueItem,
        descriptionPromptQueueItem,
      ],
      promptQueueItemToAdd: this.utilsService.deepCopy(EMPTY_PROMPT_QUEUE_ITEM),
    };

    this.openaiArticleQueue.push(openaiArticleQueueItem);
  }

  public removePromptFromQueue(artQindex, pmtQindex): void {
    this.openaiArticleQueue[artQindex].openaiPromptQueue.splice(pmtQindex, 1);
  }

  public addPromptToArticleQueue(artQindex): void {
    const articleQItem = this.openaiArticleQueue[artQindex];
    const promptText = articleQItem.promptQueueItemToAdd?.prompt?.prompt || '';

    if (!promptText.trim()) return;

    const newPromptQItem: OpenaiPromptQueueItem = this.utilsService.deepCopy(
      articleQItem.promptQueueItemToAdd
    );
    newPromptQItem.name = promptText;
    this.openaiArticleQueue[artQindex].openaiPromptQueue.push(newPromptQItem);

    // reset the item to add
    this.openaiArticleQueue[artQindex].promptQueueItemToAdd =
      this.utilsService.deepCopy(EMPTY_PROMPT_QUEUE_ITEM);
  }

  public processQueue(promptQueueBatch: OpenaiPromptQueueBatch): void {
    this.batchStartTime = Date.now();

    if (this.isQueuePaused) {
      // cache previous pending batch, as Queue is paused.
      if (promptQueueBatch)
        this.promptQueueBatchJustBeforePause = promptQueueBatch;
      return;
    } else {
      // Resume from where it was paused
      promptQueueBatch = this.utilsService.deepCopy(
        this.promptQueueBatchJustBeforePause
      );
      this.promptQueueBatchJustBeforePause = null;
    }

    // If this is a not a failed call to processQueue(), then create a batch.
    if (!promptQueueBatch) {
      promptQueueBatch = this.createBatchOfPromptQueueItems();
    }
    const { promptQueueItems, batchIndices } = promptQueueBatch;

    // Increment current openaiPromptQueueIndex, with last item being in progress
    this.updateOpenaiPromptQueueIndex(batchIndices);

    // Set status as inprogress of the batch
    this.updatePromptQueueBatchStatus(
      this.openaiArticleQueueIndex,
      batchIndices,
      OpenaiPromptQueueItemStatus.inprogress
    );

    //Create the prompt promises for the batch
    const batchPromises = promptQueueItems.map((item) =>
      this.openaiService.getChatResponse([item.prompt.prompt])
    );

    // Wait for success/failure and process results
    Promise.allSettled(batchPromises).then((results) => {
      const faileditemsIndices: Array<number> = [];
      const faileditems: Array<OpenaiPromptQueueItem> = [];

      results.forEach((item, index) => {
        const pmtQItem =
          this.openaiArticleQueue[this.openaiArticleQueueIndex]
            .openaiPromptQueue[batchIndices[index]];
        if (item.status === 'fulfilled') {
          // Write result back to original promptQueue, on successful prompt
          const mdText = item.value;
          const htmlText = this.html2json.md2html(mdText);
          const json = this.html2json.html2json(htmlText);
          pmtQItem.prompt.message = {
            mdText,
            htmlText,
            json,
            jsonText: JSON.stringify(json),
          };
          pmtQItem.status = OpenaiPromptQueueItemStatus.completed;
          pmtQItem.timeTaken = Date.now() - this.batchStartTime;
        } else {
          // On Prompt Failure, set status and processQueue agin with failed prompts after a delay.
          pmtQItem.status = OpenaiPromptQueueItemStatus.failed;
          pmtQItem.timeTaken = Date.now() - this.batchStartTime;
          faileditems.push(pmtQItem);
          faileditemsIndices.push(batchIndices[index]);
          this.errorMsg.push(
            `Article Queue: ${this.openaiArticleQueueIndex} | ${pmtQItem.name} | ${item.reason}`
          );
        }
      });

      // If there are some failed prompts, then re-attempt, after some time
      if (faileditems.length) {
        this.onPromptQueueBatchFailure({
          promptQueueItems: faileditems,
          batchIndices: faileditemsIndices,
        });
      } else {
        // On success
        this.onPromptQueueBatchSuccess(
          this.openaiArticleQueueIndex,
          batchIndices
        );

        // Update current Indices and process next batch if available.
        this.processQueueForNextBatch();
      }
    });
  }

  public createBatchOfPromptQueueItems(): OpenaiPromptQueueBatch {
    const currentPromptQueue: OpenaiArticleQueueItem =
      this.openaiArticleQueue[this.openaiArticleQueueIndex];
    const startIndex = this.openaiPromptQueueIndex;

    const promptQueueItems = currentPromptQueue.openaiPromptQueue.slice(
      startIndex,
      startIndex + OPENAI_MAX_REQUEST_COUNT
    );

    const batchIndices = promptQueueItems.map(
      (item, index) => startIndex + index
    );

    // Increment current openaiPromptQueueIndex, with last item being in progress
    this.updateOpenaiPromptQueueIndex(batchIndices);

    return { promptQueueItems, batchIndices };
  }

  public updateOpenaiPromptQueueIndex(batchIndices: Array<number>): void {
    // Increment current openaiPromptQueueIndex, with last item being in progress
    if (this.openaiPromptQueueIndex <= batchIndices[batchIndices.length - 1]) {
      this.openaiPromptQueueIndex = batchIndices[batchIndices.length - 1] + 1;
    }
  }

  public onPromptQueueBatchSuccess(
    articleQueueIndex: number,
    batchIndices: Array<number>
  ): void {
    // Update article
    this.updateArticlePromptQueue(articleQueueIndex, batchIndices);
  }

  public onPromptQueueBatchFailure(failedBatch: OpenaiPromptQueueBatch): void {
    this.utilsService
      .delay(OPENAI_FAILED_REQUEST_DELAY)
      .then(() => this.processQueue(failedBatch));
  }

  public updateArticlePromptQueue(
    articleQueueIndex: number,
    batchIndices: Array<number>
  ) {
    batchIndices.forEach((itemIndex) => {
      const promptQueueItem =
        this.openaiArticleQueue[articleQueueIndex].openaiPromptQueue[itemIndex];
      const jsonEl = promptQueueItem.prompt.message.json;
      switch (promptQueueItem.prompt.promptType) {
        case OpenaiPromptType.questions:
          this.generatePromptQueueItemsFromKeywords(jsonEl);
          break;
        case OpenaiPromptType.subtopics:
          this.generatePromptQueueItemsFromKeywords(jsonEl);
          break;
        case OpenaiPromptType.keywords:
          break;
        case OpenaiPromptType.description:
          break;
        default:
      }
    });
  }

  public generatePromptQueueItemsFromKeywords(jsonEl: EditorElement) {
    const keywords = this.aeService.readKeywordsFromEditorElement(jsonEl);
    keywords.forEach((keyword) => {
      const pmtQItem: OpenaiPromptQueueItem = this.utilsService.deepCopy(
        EMPTY_PROMPT_QUEUE_ITEM
      );
      pmtQItem.name = keyword;
      pmtQItem.prompt.prompt = keyword;
      pmtQItem.prompt.promptType = OpenaiPromptType.content;
      pmtQItem.status = OpenaiPromptQueueItemStatus.notstarted;
      this.openaiArticleQueue[
        this.openaiArticleQueueIndex
      ].openaiPromptQueue.push(pmtQItem);
    });
  }

  public updatePromptQueueBatchStatus(
    articleQueueIndex: number,
    batchIndices: Array<number>,
    status: OpenaiPromptQueueItemStatus
  ) {
    // Set status
    const currentPromptQueue: OpenaiArticleQueueItem =
      this.openaiArticleQueue[articleQueueIndex];
    batchIndices.forEach(
      (itemIndex) =>
        (currentPromptQueue.openaiPromptQueue[itemIndex].status = status)
    );
  }

  public processQueueForNextBatch(): void {
    // if NOT end of both artQ and pmtQ is reached, process further
    const articleQueueCount = this.openaiArticleQueue.length;
    const promptQueueCount =
      this.openaiArticleQueue[this.openaiArticleQueueIndex].openaiPromptQueue
        .length;
    const isEndOfAllQueues =
      this.openaiArticleQueueIndex >= articleQueueCount - 1 &&
      this.openaiPromptQueueIndex >= promptQueueCount - 1;

    if (isEndOfAllQueues) {
      this.stopQueue();
      this.saveArticle(this.openaiArticleQueueIndex);
      return;
    }

    if (this.openaiPromptQueueIndex >= promptQueueCount - 1) {
      // As current article Q is Finished, let's save the article to firebase.
      this.saveArticle(this.openaiArticleQueueIndex);
      this.openaiArticleQueueIndex++;
      this.openaiPromptQueueIndex = 0;
    }

    const timeToWaitForNextBatch =
      OPENAI_MAX_REQUEST_DELAY - (Date.now() - this.batchStartTime);
    if (timeToWaitForNextBatch > 0) {
      this.utilsService.delay(timeToWaitForNextBatch).then(() => {
        this.processQueue(null);
      });
    } else {
      this.processQueue(null);
    }
  }

  public saveArticle(artQIndex: number) {
    const artQItem = this.openaiArticleQueue[artQIndex];
    if (artQItem.saveStatus === true) return;

    const article: Article = this.aeService.createInitializedArticle(
      artQItem.name,
      this.appConfig
    );

    artQItem.openaiPromptQueue.forEach((item, index) => {
      const jsonEl = item.prompt.message.json;
      if (jsonEl) {
        if (index === 0) {
          article.body = jsonEl;
        } else {
          switch (item.prompt.promptType) {
            case OpenaiPromptType.keywords:
              article.metaInfo.keywords = this.aeService
                .readKeywordsFromEditorElement(jsonEl)
                .join(', ');
              article.metaInfo['article:tag'] = article.metaInfo.keywords;
              break;
            case OpenaiPromptType.description:
              article.metaInfo.description =
                this.aeService.readDescriptionFromEditorElement(jsonEl);
              break;
            default:
              article.body.children = [].concat(
                article.body.children,
                this.aeService.generateArticleSubheading(item.prompt.prompt),
                jsonEl.children
              );
          }
        }
      }
    });

    this.articlesFirebaseService
      .addArticle(article)
      .then((art) => {
        artQItem.saveStatus = true;
        this.errorMsg.push(`Article Saved: ${artQItem.name} id: ${art.id}`);
      })
      .catch((err) => {
        artQItem.saveStatus = false;
        this.errorMsg.push(
          `Error saving article: ${artQItem.name} | ${err.message}`
        );
      });
  }
}
