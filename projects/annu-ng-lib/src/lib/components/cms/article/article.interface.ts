import { EditorElement } from "../content-editor";
import { ImageInfo, MetaInfo } from "../../common-ui";

export interface Article {
    id?: string;
    name?: string;   // dash separated article name, that can be used as router path.has to be unique, based on article title.
    metaInfo?: MetaInfo; // This info will be used for SEO for the page., title, description, keywords etc.
    image?: ImageInfo,   // Thumbnail Image src
    body?: EditorElement;
    categories?: Array<string>;
    created?: string;
    updated?: string;
    userId?: string;    // User Id from Users
    isLive?: boolean;   // true if published and live to web.
}
