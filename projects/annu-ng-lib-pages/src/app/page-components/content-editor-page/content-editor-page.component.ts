import { Component, OnInit } from '@angular/core';
import { EditorElement } from '@annu-ng-lib';

@Component({
  selector: 'anu-content-editor-page',
  templateUrl: './content-editor-page.component.html',
  styleUrls: ['./content-editor-page.component.scss']
})
export class ContentEditorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public contentChanged(editorElement: EditorElement): void {
    console.log('Page');
    console.log(editorElement);
  }
}
