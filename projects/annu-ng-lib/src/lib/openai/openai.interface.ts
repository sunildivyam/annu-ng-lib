
export interface OpenaiConfig {
    apiKey: string;
    organization: string;
};

export enum OpenaiImageSize {
    _256x256 = '256x256',
    _512x512 = '512x512',
    _1024x1024 = '1024x1024'
};
