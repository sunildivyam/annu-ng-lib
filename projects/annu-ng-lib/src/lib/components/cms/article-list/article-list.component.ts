import { Component, Injector, Input, OnInit } from '@angular/core';
import { Article } from '../article/article.interface';

@Component({
  selector: 'anu-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  @Input() items: Array<Article> = [];
  @Input() href: string;

  constructor(private injector: Injector) {
    this.items = this.injector.get('items', this.items);
    this.href = this.injector.get('href', this.href);
  }

  ngOnInit(): void {
  }

}
