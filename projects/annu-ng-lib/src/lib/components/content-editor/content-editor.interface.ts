export interface Link {
    href: string;
    text: string;
    title?: string;
    target?: string;    
};

export interface EditorElementData {
    href?: string;
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

export interface TextSelectionEvent {
    text: string;
    selection: Selection;
    selectionRect: DOMRect;
}
