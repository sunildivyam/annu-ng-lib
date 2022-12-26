import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentEditorComponent } from './content-editor.component';
import { FormsModule } from '@angular/forms';
import { ContenteditableValueAccessorDirective } from './directives/contenteditable-value-accessor.directive';
import { FocusDirective } from './directives/focus.directive';
import { ContentElementComponent } from './content-element/content-element.component';
import { FormatInlineDirective } from './directives/format-inline.directive';
import { ToolbarModule } from '../../common-ui/toolbar';
import { ModalModule } from '../../common-ui/modal';
import { ImageFormModule } from '../../common-ui/image-form';
import { LinkFormModule } from '../../common-ui/link-form';
import { CodeBlockModule } from '../../common-ui/code-block';
import { LeafElementComponent } from './leaf-element/leaf-element.component';



@NgModule({
  declarations: [ContentEditorComponent,
    ContenteditableValueAccessorDirective,
    FocusDirective,
    ContentElementComponent,
    FormatInlineDirective,
    LeafElementComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    ModalModule,
    ImageFormModule,
    LinkFormModule,
    CodeBlockModule
  ],
  exports: [
    ContentEditorComponent,
    ContenteditableValueAccessorDirective,
    FocusDirective,
    ContentElementComponent,
    FormatInlineDirective,
    LeafElementComponent,
    ],
})
export class ContentEditorModule { }
