import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryEditorComponent } from './category-editor.component';
import { ContentEditorModule } from '../content-editor';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoryEditorComponent
  ],
  imports: [
    CommonModule,
    ContentEditorModule,
    FormsModule,
  ],
  exports: [
    CategoryEditorComponent
  ],
})
export class CategoryEditorModule { }
