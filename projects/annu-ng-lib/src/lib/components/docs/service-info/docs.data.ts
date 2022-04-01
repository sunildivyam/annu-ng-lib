import { DocsData } from '../../docs/docs.interface';

const svcInfo = {
    "name": "UtilsService",
    "description": "<p>UtilsService exports all the methods that provides some common utility.</p>\n",
    "tsUrl": "projects/annu-ng-lib/src/lib/services/utils/utils.service.ts",
    "tsSource": "import { Injectable } from '@angular/core';\r\n\r\n\r\n/**\r\n * UtilsService exports all the methods that provides some common utility.\r\n *\r\n * @export\r\n * @class UtilsService\r\n * @typedef {UtilsService}\r\n */\r\n@Injectable()\r\nexport class UtilsService {\r\n\r\n  constructor() { }\r\n\r\n  /**\r\n   * Returns the current Date from browser in the ISO format.\r\n   *\r\n   * @public\r\n   * @readonly\r\n   * @type {string}\r\n   */\r\n  public get currentDate(): string {\r\n    return (new Date()).toISOString();\r\n  }\r\n\r\n\r\n  /**\r\n   * Returns a local date string\r\n   * @date 26/2/2022 - 9:48:21 am\r\n   *\r\n   * @public\r\n   * @param {string} date\r\n   * @returns {string}\r\n   */\r\n  public dateToLocalString(date: string = ''): string {\r\n    if (!date) return '';\r\n    const options: any = { year: 'numeric', month: 'short', day: 'numeric' };\r\n    const dt = new Date(date);\r\n    return dt.toLocaleDateString('en-US', options);\r\n  }\r\n\r\n  /**\r\n   * Converts a string into dashed string. All spaces are replaced with dashes.\r\n   * This converted string can be used for getting a unique name for a title of any content like, article etc.\r\n   *\r\n   * @param title\r\n   * @returns\r\n   */\r\n  public toDashedString(title: string = ''): string {\r\n    return title.split(' ').join('-').toLocaleLowerCase();\r\n  }\r\n\r\n\r\n  /**\r\n   * Scrolls the page to the desired top position.\r\n   * @date 25/2/2022 - 5:28:11 pm\r\n   *\r\n   * @public\r\n   * @param {number} top\r\n   */\r\n  public scrollTo(top: number = 0) {\r\n    if (typeof window !== 'undefined') {\r\n      window.scrollTo({ top: top });\r\n    }\r\n  }\r\n\r\n  public getTrimmedStringByChars(str: string, count: number = 0): string {\r\n    if (!str || typeof str !== 'string' || !count || count <= 0) {\r\n      return str;\r\n    }\r\n\r\n    return str.substring(0, count) + '...';\r\n  }\r\n}\r\n",
    "inputProps": [],
    "outputProps": [],
    "props": [],
    "methods": [
        {
            "name": "dateToLocalString",
            "returnType": "string",
            "args": [
                {
                    "name": "date",
                    "type": "string",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "defaultValue": "''"
                }
            ],
            "deprecated": "",
            "deprecationMessage": "",
            "description": "<p>Returns a local date string</p>\n",
            "accessModifier": "public"
        },
        {
            "name": "getTrimmedStringByChars",
            "returnType": "string",
            "args": [
                {
                    "name": "str",
                    "type": "string",
                    "deprecated": false,
                    "deprecationMessage": ""
                },
                {
                    "name": "count",
                    "type": "number",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "defaultValue": "0"
                }
            ],
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": "public"
        },
        {
            "name": "scrollTo",
            "returnType": "void",
            "args": [
                {
                    "name": "top",
                    "type": "number",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "defaultValue": "0"
                }
            ],
            "deprecated": "",
            "deprecationMessage": "",
            "description": "<p>Scrolls the page to the desired top position.</p>\n",
            "accessModifier": "public"
        },
        {
            "name": "toDashedString",
            "returnType": "string",
            "args": [
                {
                    "name": "title",
                    "type": "string",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "defaultValue": "''"
                }
            ],
            "deprecated": "",
            "deprecationMessage": "",
            "description": "<p>Converts a string into dashed string. All spaces are replaced with dashes.\nThis converted string can be used for getting a unique name for a title of any content like, article etc.</p>\n",
            "accessModifier": "public"
        }
    ]
};

export const ServiceInfoComponent: DocsData = {
    projectionContent: '',
    inputPropsValues: {
        serviceInfo: svcInfo
    }
}
