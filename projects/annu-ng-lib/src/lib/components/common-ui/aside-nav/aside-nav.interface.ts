export interface NavItem {
    href?: string;
    params?: Array<string>;
    title?: string;
    disabled?: boolean;
    separator?: boolean;    // if true, item would be rendered as a seprator/heading, and not as link
}
