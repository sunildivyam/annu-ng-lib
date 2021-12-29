import { Tab } from "../tabs";

export const COMMPONENT_INFO_TABS: Array<Tab> = [
    {
        name: 'overview',
        title: 'Overview',
        active: true,
    },
    {
        name: 'typescript',
        title: 'Typescript',
    },
    {
        name: 'html',
        title: 'Html',
    },
    {
        name: 'styles',
        title: 'Styles',
    }
];


export const PROPERTY_TYPES = {
    METHOD : 'methodsClass',
    INPUT_PROPERTY : 'inputsClass',
    OUTPUT_PROPERTY : 'outputsClass',
    PROPERTY : 'properties',
 }

 export const ACCESS_MODIFIERS = {
    121: 'private',
    122: 'protected',
    123: 'public',
 };
