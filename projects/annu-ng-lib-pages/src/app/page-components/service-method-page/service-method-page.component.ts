import { Component, OnInit } from '@angular/core';
import { ComponentMethod } from '@annu/ng-lib';

@Component({
  selector: 'anu-service-method-page',
  templateUrl: './service-method-page.component.html',
  styleUrls: ['./service-method-page.component.scss']
})
export class ServiceMethodPageComponent implements OnInit {
  method: ComponentMethod = {
    "name": "getCssVar",
    "returnType": "CssVar",
    "args": [
        {
            "name": "name",
            "type": "string",
            "deprecated": false,
            "deprecationMessage": ""
        },
        {
            "name": "value",
            "type": "string",
            "deprecated": false,
            "deprecationMessage": "",
            "defaultValue": "''"
        }
    ],
    "description": "Returns the CSS variable name",
};

  constructor() { }

  ngOnInit(): void {
  }

}
