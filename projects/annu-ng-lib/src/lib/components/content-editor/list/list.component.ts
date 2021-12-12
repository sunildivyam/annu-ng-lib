import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditorElement } from '../content-editor.interface';

@Component({
  selector: 'anu-list, [anu-list]',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() value: EditorElement = {} as EditorElement;
  @Input() fullTree: EditorElement = {} as EditorElement;
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
      if (!this.value.text) {
        event.preventDefault();
        this.backspaceKeyPressed.emit(this.value);
      }
    }
  
    public contentChanged() {
      this.changed.emit(this.value);
    }
}
