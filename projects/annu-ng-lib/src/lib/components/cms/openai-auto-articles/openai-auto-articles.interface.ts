import { OpenaiPrompt } from '../../common-ui';

export interface OpenaiPromptQueueItem {
  name: string;
  prompt: OpenaiPrompt;
  status: OpenaiPromptQueueItemStatus;
  timeTaken: number;
}

export interface OpenaiArticleQueueItem {
    name: string;
    openaiPromptQueue: Array<OpenaiPromptQueueItem>;
    promptQueueItemToAdd: OpenaiPromptQueueItem;
    saveStatus?: boolean;
}

export enum OpenaiPromptQueueItemStatus {
  notstarted = 'notstarted',
  inprogress = 'inprogress',
  failed = 'failed',
  completed = 'completed',
}

export interface OpenaiPromptQueueBatch {
  promptQueueItems: Array<OpenaiPromptQueueItem>;
  batchIndices: Array<number>;
}
