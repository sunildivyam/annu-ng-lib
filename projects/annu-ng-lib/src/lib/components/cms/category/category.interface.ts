import { ImageInfo } from "../../common-ui/image-form";
import { MetaInfo } from "../../common-ui/meta";

export interface Category {
    id?: string;
    shortTitle?: string;
    isFeatured?: boolean;   // true, if featured category, this can be shown at primary locations on page.
    metaInfo?: MetaInfo; // This info will be used for SEO for the page., title, description, keywords etc.
    image?: ImageInfo,   // Thumbnail Image src
    created?: string;
    updated?: string;
    userId?: string;    // User Id from Users
    isLive?: boolean;
};
