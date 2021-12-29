import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anu-code-block-page',
  templateUrl: './code-block-page.component.html',
  styleUrls: ['./code-block-page.component.scss']
})
export class CodeBlockPageComponent implements OnInit {
  public usageSource = `
  <anu-code-block [source]="source" language="markup"></anu-code-block>
  <!-- where source = html markup -->`;
  public source = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>

  </body>
  </html>`;

  constructor() { }

  ngOnInit(): void {
  }

}
