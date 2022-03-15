import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleElementComponent } from './article-element/article-element.component';
import { CardModule, MetaModule } from '../../common-ui';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ArticleComponent, ArticleElementComponent],
  imports: [
    CommonModule,
    MetaModule,
    CardModule,
    RouterModule,
  ],
  exports: [ArticleComponent, ArticleElementComponent],
})
export class ArticleModule { }
