import { Component, OnInit } from '@angular/core';
import { Article } from '@annu-ng-lib';
import { ARTICLES } from './config';

@Component({
  selector: 'anu-article-list-page',
  templateUrl: './article-list-page.component.html',
  styleUrls: ['./article-list-page.component.scss']
})
export class ArticleListPageComponent implements OnInit {

  public articles: Array<Article> = ARTICLES;

  constructor() { }

  ngOnInit(): void {
  }

}
