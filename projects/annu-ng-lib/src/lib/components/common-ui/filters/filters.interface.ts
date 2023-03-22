export enum FilterTypes {
    SingleSelect = 'single-select',
    MultiSelect = 'multi-select'
};

export interface Filter {
    id: string;
    title: string;
    enabled: boolean;
    type: FilterTypes;
    filter: {
        yesLabel?: string,
        noLabel?: string;
        value?: boolean;
        selectedValues?: Array<Object>;
        values?: Array<Object>;
        keyName?: string;       // in case of multi-select type, key field
        valueName?: string;     // in case of multi-select type, value field
    }
};
