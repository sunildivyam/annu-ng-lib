export interface OpenaiPrompt {
    prompt: string;
    message?: OpenaiMessage;
};

export interface OpenaiMessage {
    mdText?: string;
    htmlText?: string;
    jsonText?: string;
};
