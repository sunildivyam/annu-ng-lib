import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleViewComponent } from './article-view.component';
import { ArticleModule } from '../article';



@NgModule({
  declarations: [
    ArticleViewComponent
  ],
  imports: [
    CommonModule,
    ArticleModule,
  ],
  exports: [
    ArticleViewComponent
  ],
})
export class ArticleViewModule { }
