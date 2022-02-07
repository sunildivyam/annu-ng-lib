import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleElementComponent } from './article-element/article-element.component';
import { MetaModule } from '../../common-ui';



@NgModule({
  declarations: [ArticleComponent, ArticleElementComponent],
  imports: [
    CommonModule,
    MetaModule
  ],
  exports: [ArticleComponent, ArticleElementComponent],
})
export class ArticleModule { }
