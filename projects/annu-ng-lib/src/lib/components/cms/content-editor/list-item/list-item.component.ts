import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditorElement } from '../content-editor.interface';

@Component({
  selector: 'anu-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() value: EditorElement = {} as EditorElement;
  @Input() fullTree: EditorElement = {} as EditorElement;
  @Output() enterKeyPressed = new EventEmitter<EditorElement>();
  @Output() backspaceKeyPressed = new EventEmitter<EditorElement>();
  @Output() changed = new EventEmitter<EditorElement>();
  @Output() focusin = new EventEmitter<EditorElement>();

  constructor() {}

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

  public onBlur(event: any) {
    event.stopPropagation();
    this.changed.emit(this.value);
  }

  public onFocus(event: any) {
    event.stopPropagation();
    this.focusin.emit(this.value);
  }

  public textSelected() {
    // TODO
  }
}
