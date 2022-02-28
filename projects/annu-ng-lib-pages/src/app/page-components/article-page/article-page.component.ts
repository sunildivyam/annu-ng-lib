import { Component, OnInit } from '@angular/core';
import { Article } from '@annu/ng-lib';
import { ARTICLE } from './config';

@Component({
  selector: 'anu-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  article: Article = { ...ARTICLE }
  constructor() { }

  ngOnInit(): void {
  }

}
