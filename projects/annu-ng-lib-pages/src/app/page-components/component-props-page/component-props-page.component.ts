import { Component, OnInit } from '@angular/core';
import { ComponentProp } from '@annu-ng-lib';

@Component({
  selector: 'anu-component-props-page',
  templateUrl: './component-props-page.component.html',
  styleUrls: ['./component-props-page.component.scss']
})
export class ComponentPropsPageComponent implements OnInit {
  props: Array<ComponentProp> = [
    {
        "name": "nextPage",
        "type": "number",
        "defaultValue": "0",
        "deprecationMessage": "",
        "description": "",
        "accessModifier": ""
    },
    {
        "name": "pageCount",
        "type": "number",
        "defaultValue": "0",
        "deprecationMessage": "",
        "description": "",
        "accessModifier": ""
    },
    {
        "name": "previousPage",
        "type": "number",
        "defaultValue": "0",
        "deprecationMessage": "",
        "description": "",
        "accessModifier": ""
    },
    {
        "name": "rangePages",
        "type": "Array<number>",
        "defaultValue": "[]",
        "deprecationMessage": "",
        "description": "",
        "accessModifier": ""
    }
];

  constructor() { }

  ngOnInit(): void {
  }

}
