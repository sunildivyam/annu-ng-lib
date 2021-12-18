export interface EditorElementData {
    url?: string;
    src?: string;
    alt?: string;
    text?: string;
};

export interface EditorElement {
    name: string;
    tagName: string;
    isContainer?: boolean;
    focused?: boolean;
    data?: EditorElementData;
    children?: Array<EditorElement>;
};
