import { EditorElement } from "../content-editor";
import { ImageInfo } from "../image-form";

export interface Article {
    name: string;   // dash separated article name, that can be used as router path.has to be unique, based on article title.
    // metaInfo: MetaInfo; // This info will be used for SEO for the page.
    image?: ImageInfo,   // Thumbnail Image src
    body?: EditorElement;
}
