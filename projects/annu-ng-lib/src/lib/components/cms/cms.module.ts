import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentEditorModule } from './content-editor/content-editor.module';
import { ArticleModule } from './article/article.module';
import { ArticleEditorModule } from './article-editor/article-editor.module';
import { CategoryModule } from './category/category.module';
import { CategoryEditorModule } from './category-editor/category-editor.module';
import { ArticleListModule } from './article-list/article-list.module';
import { ArticleViewModule } from './article-view/article-view.module';
import { CategoryArticlesListModule } from './category-articles-list/category-articles-list.module';
import { OpenaiAutoArticlesModule } from './openai-auto-articles/openai-auto-articles.module';
import { ArticlesSlideshowModule } from './articles-slideshow/articles-slideshow.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    ContentEditorModule,
    ArticleModule,
    ArticleEditorModule,
    CategoryModule,
    CategoryEditorModule,
    ArticleListModule,
    ArticleViewModule,
    CategoryArticlesListModule,
    OpenaiAutoArticlesModule,
    ArticlesSlideshowModule,
  ],
})
export class CmsModule {}
