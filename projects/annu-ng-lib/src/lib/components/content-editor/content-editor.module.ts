import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentEditorComponent } from './content-editor.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { FormsModule } from '@angular/forms';
import { ContenteditableValueAccessorDirective } from './contenteditable-value-accessor.directive';
import { FocusDirective } from './focus.directive';
import { HeadingComponent } from './heading/heading.component';



@NgModule({
  declarations: [ContentEditorComponent, ParagraphComponent, ContenteditableValueAccessorDirective, FocusDirective, HeadingComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ContentEditorComponent, ParagraphComponent, ContenteditableValueAccessorDirective, FocusDirective, HeadingComponent],
})
export class ContentEditorModule { }
