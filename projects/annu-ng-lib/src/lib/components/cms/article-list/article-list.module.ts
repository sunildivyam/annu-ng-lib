import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list.component';
import { CardModule } from '../../common-ui/card';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ArticleListComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule
  ],
  exports: [
    ArticleListComponent
  ],
})
export class ArticleListModule { }
