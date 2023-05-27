export interface OpenaiPrompt {
    prompt: string;
    message?: OpenaiMessage;
    promptType?: OpenaiPromptType;
};

export interface OpenaiMessage {
    mdText?: string;
    htmlText?: string;
    jsonText?: string;
};

export enum OpenaiPromptType {
    Keywords = 'List good keywords for the topic',
    description = 'Give a good description for the topic',
    content = '',
};
