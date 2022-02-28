import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list.component';
import { RouterModule } from '@angular/router';
import { ArticleModule } from '../article';


@NgModule({
  declarations: [
    ArticleListComponent
  ],
  imports: [
    CommonModule,
    ArticleModule,
    RouterModule,
  ],
  exports: [
    ArticleListComponent
  ],
})
export class ArticleListModule { }
