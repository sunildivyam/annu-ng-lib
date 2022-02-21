import { Component, OnInit } from '@angular/core';
import { Article } from '@annu/ng-lib';
import { ARTICLE_ELEMENT} from './config';

@Component({
  selector: 'anu-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  article: Article = {
    name: 'default-article-name',
    body: ARTICLE_ELEMENT,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
