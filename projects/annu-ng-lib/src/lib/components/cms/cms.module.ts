import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentEditorModule } from './content-editor/content-editor.module';
import { ArticleModule } from './article/article.module';
import { ArticleEditorModule } from './article-editor/article-editor.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ContentEditorModule,
    ArticleModule,
    ArticleEditorModule,]
})
export class CmsModule { }
