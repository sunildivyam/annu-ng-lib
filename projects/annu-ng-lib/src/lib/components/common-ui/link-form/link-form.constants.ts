import { LinkTarget } from "./link-form.interface";

export const LINK_TARGETS = [
    {
        id: '_blank',
        title: '_blank - Opens the linked document in a new window or tab.',
    },
    {
        id: '_self',
        title: '_self - Opens the linked document in the same frame as it was clicked.',
    },
    {
        id: '_parent',
        title: '_parent - Opens the linked document in the parent frame.',
    },
    {
        id: '_top',
        title: '_top - Opens the linked document in the full body of the window.',
    },
] as Array<LinkTarget>;
