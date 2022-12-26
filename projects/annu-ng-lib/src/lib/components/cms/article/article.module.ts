import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleElementComponent } from './article-element/article-element.component';
import { CardModule } from '../../common-ui/card';
import { MetaModule } from '../../common-ui/meta';
import { RouterModule } from '@angular/router';
import { CodeBlockModule } from '../../common-ui/code-block';



@NgModule({
  declarations: [ArticleComponent, ArticleElementComponent],
  imports: [
    CommonModule,
    MetaModule,
    CardModule,
    RouterModule,
    CodeBlockModule,
  ],
  exports: [ArticleComponent, ArticleElementComponent],
})
export class ArticleModule { }
