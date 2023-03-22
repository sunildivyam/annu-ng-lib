import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleEditorComponent } from './article-editor.component';

import { TabsModule } from '../../common-ui/tabs';
import { CardModule } from '../../common-ui/card';
import { ImageFormModule } from '../../common-ui/image-form';
import { ModalModule } from '../../common-ui/modal';
import { MetaModule } from '../../common-ui/meta';
import { MultiSelectBoxModule } from '../../common-ui/multi-select-box';
import { ToggleModule } from '../../common-ui/toggle';

import { ContentEditorModule } from '../content-editor';
import { ArticleModule } from '../article';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ArticleEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
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
