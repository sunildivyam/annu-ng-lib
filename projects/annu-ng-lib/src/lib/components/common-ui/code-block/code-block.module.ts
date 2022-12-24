import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from './code-block.component';
import { HighlightService } from './highlight.service';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [
    CodeBlockComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    ModalModule,
  ],
  exports: [
    CodeBlockComponent
  ],
  providers: [HighlightService]
})
export class CodeBlockModule { }
