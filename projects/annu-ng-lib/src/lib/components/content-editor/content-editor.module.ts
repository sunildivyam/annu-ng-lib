import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentEditorComponent } from './content-editor.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { FormsModule } from '@angular/forms';
import { ContenteditableValueAccessorDirective } from './directives/contenteditable-value-accessor.directive';
import { FocusDirective } from './directives/focus.directive';
import { HeadingComponent } from './heading/heading.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ContentElementComponent } from './content-element/content-element.component';
import { FormatInlineDirective } from './directives/format-inline.directive';
import { ToolbarModule } from '../toolbar';
import { ModalModule } from '../modal';
import { ImageComponent } from './image/image.component';
import { ImageFormModule } from '../image-form';
import { LinkFormModule } from '../link-form';



@NgModule({
  declarations: [ContentEditorComponent,
    ParagraphComponent,
    ContenteditableValueAccessorDirective,
    FocusDirective,
    HeadingComponent,
    ListItemComponent,
    ContentElementComponent,
    FormatInlineDirective,
    ImageComponent,],
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    ModalModule,
    ImageFormModule,
    LinkFormModule
  ],
  exports: [ContentEditorComponent,
    ParagraphComponent,
    ContenteditableValueAccessorDirective,
    FocusDirective,
    HeadingComponent,
    ListItemComponent,
    ContentElementComponent,
    FormatInlineDirective,
    ImageComponent],
})
export class ContentEditorModule { }
