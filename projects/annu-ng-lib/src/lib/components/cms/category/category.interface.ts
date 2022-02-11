export interface Category {
    id?: string;
    name?: string;
    title?: string;
    description?: string;
    created?: Date;
    updated?: Date;
    userId?: string;    // User Id from Users
    isLive?: boolean;
};
