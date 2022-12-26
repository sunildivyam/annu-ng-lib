export interface SourceLanguage {
    id: string;
    title: string;
    enabled?: boolean
};

export interface CodeBlockInfo {
    source: string;
    language: string;
    enableEdit?: boolean;
}
