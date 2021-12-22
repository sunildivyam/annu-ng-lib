import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleElementComponent } from './article-element/article-element.component';



@NgModule({
  declarations: [ArticleComponent, ArticleElementComponent],
  imports: [
    CommonModule
  ],
  exports: [ArticleComponent, ArticleElementComponent],
})
export class ArticleModule { }
