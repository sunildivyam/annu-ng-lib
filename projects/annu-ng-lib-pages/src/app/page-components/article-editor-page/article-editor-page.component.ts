import { Component, OnInit } from '@angular/core';
import { Article, Category } from '@annu/ng-lib';
import { SAMPLE_CATEGORIES } from './config';

@Component({
  selector: 'anu-article-editor-page',
  templateUrl: './article-editor-page.component.html',
  styleUrls: ['./article-editor-page.component.scss']
})
export class ArticleEditorPageComponent implements OnInit {
  article: Article;
  categories: Array<Category> = [...SAMPLE_CATEGORIES];
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
