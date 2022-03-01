import { Component, OnInit } from '@angular/core';
import { Article } from '@annu/ng-lib';
import { ARTICLE } from './config';

@Component({
  selector: 'anu-article-view-page',
  templateUrl: './article-view-page.component.html',
  styleUrls: ['./article-view-page.component.scss']
})
export class ArticleViewPageComponent implements OnInit {
  article: Article = { ...ARTICLE };

  constructor() { }

  ngOnInit(): void {
  }

}
