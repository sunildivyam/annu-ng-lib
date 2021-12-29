import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from './code-block.component';
import { HighlightService } from './highlight.service';



@NgModule({
  declarations: [
    CodeBlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CodeBlockComponent
  ],
  providers: [HighlightService]
})
export class CodeBlockModule { }
