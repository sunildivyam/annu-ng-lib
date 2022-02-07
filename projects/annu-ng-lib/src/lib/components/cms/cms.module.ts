import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentEditorModule } from './content-editor/content-editor.module';
import { ArticleModule } from './article/article.module';
import { ArticleEditorModule } from './article-editor/article-editor.module';
import { CategoryModule } from './category/category.module';
import { CategoryEditorModule } from './category-editor/category-editor.module';
import { ArticleListModule } from './article-list/article-list.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ContentEditorModule,
    ArticleModule,
    ArticleEditorModule,
    CategoryModule,
    CategoryEditorModule,
    ArticleListModule,
  ]
})
export class CmsModule { }
