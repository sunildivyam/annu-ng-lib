import { Component, Input, OnInit } from '@angular/core';
import { EditorElement } from '../../content-editor/content-editor.interface';

@Component({
  selector: 'anu-article-element, [anu-article-element]',
  templateUrl: './article-element.component.html',
  styleUrls: ['./article-element.component.scss']
})
export class ArticleElementComponent implements OnInit {
  @Input() value: EditorElement;

  constructor() {}

  ngOnInit(): void {
  }

}
