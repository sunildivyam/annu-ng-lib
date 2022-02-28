import { Component, OnInit } from '@angular/core';
import { Article } from '@annu/ng-lib';

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
    console.log('Saved - ', article?.metaInfo);
  }

  public onSaveClicked(article: Article): void {
    console.log('Saved - Clicked', article?.metaInfo);
  }
}
