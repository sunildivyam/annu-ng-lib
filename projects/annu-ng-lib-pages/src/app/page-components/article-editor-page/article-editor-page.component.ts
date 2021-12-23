import { Component, OnInit } from '@angular/core';
import { Article } from '@annu-ng-lib/components/article/article.interface';

@Component({
  selector: 'anu-article-editor-page',
  templateUrl: './article-editor-page.component.html',
  styleUrls: ['./article-editor-page.component.scss']
})
export class ArticleEditorPageComponent implements OnInit {
article: Article;

  constructor() { }

  ngOnInit(): void {
  }

  public articleChanged(article: Article) {
    console.log('Saved - ', article?.name);
  }
}
