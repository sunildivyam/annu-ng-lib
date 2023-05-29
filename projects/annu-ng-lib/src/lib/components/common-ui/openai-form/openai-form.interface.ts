import { EditorElement } from "../../cms/content-editor/content-editor.interface";

export interface OpenaiPrompt {
    prompt: string;
    message?: OpenaiMessage;
    promptType?: OpenaiPromptType;
};

export interface OpenaiMessage {
    mdText?: string;
    htmlText?: string;
    jsonText?: string;
    json?: EditorElement
};

export enum OpenaiPromptType {
    keywords = 'keywords',
    subtopics = 'subtopics',
    questions = 'questions',
    description = 'description',
    content = 'content',
};
