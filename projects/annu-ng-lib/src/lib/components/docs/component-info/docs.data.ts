import { DocsData } from '../../docs/docs.interface';
const componentInfo = {
    "name": "ToolbarComponent",
    "description": "",
    "selector": "anu-toolbar",
    "styleUrl": "./toolbar.component.scss",
    "styleSource": "$icon-mage-size: 2rem;\r\n\r\nnav.annuToolbar {\r\n    display: flex;\r\n\r\n    ul {\r\n        display: inline-block;\r\n        list-style-type: none;\r\n        white-space: nowrap;\r\n        width: max-content;\r\n        padding: 0;\r\n        margin: 0;\r\n        background-color: var(--anu-primary-lightest);\r\n        border: 1px solid var(--anu-primary-normal);\r\n        border-radius: calc(var(--anu-border-radius)/2);\r\n\r\n        li {\r\n            display: inline-block;\r\n\r\n            a {\r\n                display: inline-block;\r\n                padding: 0.3rem 1rem;\r\n                color: var(--anu-accent-darkest);\r\n                vertical-align: middle;\r\n\r\n                &:hover {\r\n                    background-color: var(--anu-primary-light);\r\n                }\r\n\r\n                img {\r\n                    width: #{$icon-mage-size};\r\n                    height: #{$icon-mage-size};\r\n                    vertical-align: middle;\r\n                    margin: 0;\r\n                }\r\n            }\r\n        }\r\n\r\n        li + li {\r\n            border-left: 1px solid var(--anu-primary-light);\r\n        }\r\n    }\r\n\r\n    &.vertical {\r\n        ul {\r\n            display: flex;\r\n            flex-direction: column;\r\n        }\r\n    }\r\n}\r\n",
    "templateUrl": "./toolbar.component.html",
    "templateSource": "<nav role=\"toolbar\" class=\"annuToolbar\" [ngClass]=\"{'vertical': isVertical}\">\r\n    <ul class=\"shadow\">\r\n        <li *ngFor=\"let item of items\">\r\n            <a [href]=\"item.href\" [title]=\"item.title\" (click)=\"itemClicked($event, item)\">\r\n                <span *ngIf=\"item.icon\" class=\"annuToolbar_icon\" [innerHtml]=\"item.icon\"></span>\r\n                <img *ngIf=\"item.iconImage\" class=\"annuToolbar_iconimage\" [src]=\"item.iconImage\" [alt]=\"item.title\"/>\r\n                <span *ngIf=\"item.label\" class=\"annuToolbar_label\">{{item.label}}</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</nav>",
    "tsUrl": "projects/annu-ng-lib/src/lib/components/common-ui/toolbar/toolbar.component.ts",
    "tsSource": "import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';\r\nimport { ToolbarItem } from '.';\r\n\r\n@Component({\r\n  selector: 'anu-toolbar',\r\n  templateUrl: './toolbar.component.html',\r\n  styleUrls: ['./toolbar.component.scss']\r\n})\r\nexport class ToolbarComponent implements OnInit {\r\n  @Input() items: Array<ToolbarItem> = [];\r\n  @Input() isVertical: boolean = false;\r\n\r\n  @Output() changed = new EventEmitter<ToolbarItem>();\r\n\r\n  constructor() {}\r\n\r\n  ngOnInit(): void {\r\n  }\r\n\r\n  public itemClicked(event: any, item: ToolbarItem): void {\r\n    if (!item.href) {\r\n      event.preventDefault();\r\n    }\r\n\r\n    this.changed.emit(item);\r\n  }\r\n}\r\n",
    "inputProps": [
        {
            "name": "isVertical",
            "type": "boolean",
            "defaultValue": "false",
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": ""
        },
        {
            "name": "items",
            "type": "Array<ToolbarItem>",
            "defaultValue": "[]",
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": ""
        }
    ],
    "outputProps": [
        {
            "name": "changed",
            "type": "EventEmitter",
            "defaultValue": "new EventEmitter<ToolbarItem>()",
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": ""
        }
    ],
    "props": [],
    "methods": [
        {
            "name": "itemClicked",
            "returnType": "void",
            "args": [
                {
                    "name": "event",
                    "type": "any",
                    "deprecated": false,
                    "deprecationMessage": ""
                },
                {
                    "name": "item",
                    "type": "ToolbarItem",
                    "deprecated": false,
                    "deprecationMessage": ""
                }
            ],
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": "public"
        },
        {
            "name": "ngOnInit",
            "returnType": "void",
            "args": [],
            "deprecated": "",
            "deprecationMessage": "",
            "description": ""
        }
    ]
};

export const ComponentInfoComponent: DocsData = {
    projectionContent: '',
    inputPropsValues: {
        componentInfo
    }
}
