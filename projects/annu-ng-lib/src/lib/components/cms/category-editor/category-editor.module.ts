import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryEditorComponent } from './category-editor.component';
import { ContentEditorModule } from '../content-editor';
import { TabsModule,
  CardModule,
  ImageFormModule,
  ModalModule,
  MetaModule,
  MultiSelectBoxModule,
  ToggleModule, } from '../../common-ui';
import { CategoryModule } from '../category';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoryEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    ContentEditorModule,
    CardModule,
    ImageFormModule,
    ModalModule,
    MetaModule,
    MultiSelectBoxModule,
    ToggleModule,
    CategoryModule,
  ],
  exports: [
    CategoryEditorComponent
  ],
})
export class CategoryEditorModule { }
