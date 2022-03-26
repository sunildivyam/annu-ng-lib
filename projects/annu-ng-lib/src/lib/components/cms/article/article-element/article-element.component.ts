import { Component, Injector, Input, OnInit } from '@angular/core';
import { EditorElement } from '../../content-editor/content-editor.interface';

@Component({
  selector: 'anu-article-element, [anu-article-element]',
  templateUrl: './article-element.component.html',
  styleUrls: ['./article-element.component.scss']
})
export class ArticleElementComponent implements OnInit {
  @Input() value: EditorElement;

  constructor(private injector: Injector) {
    this.value = this.injector.get('value', this.value);
  }

  ngOnInit(): void {
  }

}
