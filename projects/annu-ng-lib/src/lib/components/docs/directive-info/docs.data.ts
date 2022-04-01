import { DocsData } from '../../docs/docs.interface';
const directiveInfo = {
    "name": "FocusDirective",
    "description": "",
    "selector": "[focus]",
    "styleUrl": "",
    "styleSource": "",
    "templateUrl": "",
    "templateSource": "",
    "tsUrl": "projects/annu-ng-lib/src/lib/components/cms/content-editor/directives/focus.directive.ts",
    "tsSource": "import { Directive, ElementRef, EventEmitter, Inject, Input, Output } from '@angular/core';\r\n\r\n@Directive({\r\n  selector: '[focus]'\r\n})\r\nexport class FocusDirective {\r\n  @Input() focus: boolean;\r\n  @Output() onFocus = new EventEmitter();\r\n\r\n  constructor(@Inject(ElementRef) private element: ElementRef) { }\r\n\r\n  protected ngOnChanges() {\r\n    if (this.focus === true ) this.element.nativeElement.focus();    \r\n  }\r\n}\r\n",
    "inputProps": [
        {
            "name": "focus",
            "type": "boolean",
            "defaultValue": "",
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": ""
        }
    ],
    "outputProps": [
        {
            "name": "onFocus",
            "type": "EventEmitter",
            "defaultValue": "new EventEmitter()",
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": ""
        }
    ],
    "props": [],
    "methods": [
        {
            "name": "ngOnChanges",
            "returnType": "void",
            "args": [],
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": "protected"
        }
    ]
};

export const DirectiveInfoComponent: DocsData = {
    projectionContent: '',
    inputPropsValues: {
        directiveInfo
    }
}
