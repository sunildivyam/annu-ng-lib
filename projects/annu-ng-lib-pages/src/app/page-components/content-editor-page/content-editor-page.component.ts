import { Component, OnInit } from '@angular/core';
import { EditorElement } from '@annu-ng-lib';
import { EDITOR_ELEMENT } from './config';

@Component({
  selector: 'anu-content-editor-page',
  templateUrl: './content-editor-page.component.html',
  styleUrls: ['./content-editor-page.component.scss']
})
export class ContentEditorPageComponent implements OnInit {
  editorElement: EditorElement = EDITOR_ELEMENT;

  constructor() { }

  ngOnInit(): void {
  }

  public contentChanged(editorElement: EditorElement): void {
    // console.log('Page');
  }
}
