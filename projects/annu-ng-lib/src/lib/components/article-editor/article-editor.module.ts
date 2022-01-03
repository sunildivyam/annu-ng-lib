import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleEditorComponent } from './article-editor.component';
import { TabsModule } from '../tabs/tabs.module';
import { ContentEditorModule } from '../content-editor/content-editor.module';
import { CardModule } from '../card';
import { ImageFormModule } from '../image-form';
import { ModalModule } from '../modal';
import { MetaModule } from '../meta';



@NgModule({
  declarations: [ArticleEditorComponent],
  imports: [
    CommonModule,
    TabsModule,
    ContentEditorModule,
    CardModule,
    ImageFormModule,
    ModalModule,
    MetaModule
  ],
  exports: [ArticleEditorComponent],
})
export class ArticleEditorModule { }
