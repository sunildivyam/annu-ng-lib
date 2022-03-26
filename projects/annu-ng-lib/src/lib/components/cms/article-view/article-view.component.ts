import { Component, Injector, Input, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'anu-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  @Input() value: Article | null = null;
  @Input() showMetaInfo: boolean = false;

  constructor(private injector: Injector) {
    this.value = this.injector.get('value', this.value);
    this.showMetaInfo = this.injector.get('showMetaInfo', this.showMetaInfo);
  }

  ngOnInit(): void {
  }

}
