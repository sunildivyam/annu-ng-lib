import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditorElement } from '../content-editor.interface';

@Component({
  selector: 'anu-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {
@Input() value: EditorElement;
@Input() fullTree: Array<EditorElement> = [];
@Output() enterKeyPressed = new EventEmitter<EditorElement>();
@Output() backspaceKeyPressed = new EventEmitter<EditorElement>();
@Output() changed = new EventEmitter<EditorElement>();

  constructor() { }

  ngOnInit(): void {
  }

  public enterPressed(event: any): void {
    event.preventDefault();
    this.enterKeyPressed.emit(this.value);
  }

  public backspacePressed(event: any): void {
    if (!this.value?.data?.text) {
      event.preventDefault();
      this.backspaceKeyPressed.emit(this.value);
    }
  }

  public contentChanged() {
    this.changed.emit(this.value);
  }
}
