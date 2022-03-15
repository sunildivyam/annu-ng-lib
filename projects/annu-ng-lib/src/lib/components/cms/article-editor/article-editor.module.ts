import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleEditorComponent } from './article-editor.component';
import { TabsModule, CardModule, ImageFormModule, ModalModule, MetaModule, MultiSelectBoxModule, ToggleModule } from '../../common-ui';
import { ContentEditorModule } from '../content-editor';
import { ArticleModule } from '../article';

@NgModule({
  declarations: [ArticleEditorComponent],
  imports: [
    CommonModule,
    TabsModule,
    ContentEditorModule,
    CardModule,
    ImageFormModule,
    ModalModule,
    MetaModule,
    ArticleModule,
    MultiSelectBoxModule,
    ToggleModule,
  ],
  exports: [ArticleEditorComponent],
})
export class ArticleEditorModule { }
