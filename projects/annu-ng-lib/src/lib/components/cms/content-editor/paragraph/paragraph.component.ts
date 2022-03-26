import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
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
  @Output() focusin = new EventEmitter<EditorElement>();

  constructor(private injector: Injector) {
    this.value = this.injector.get('value', this.value || null);
    this.fullTree = this.injector.get('fullTree', this.fullTree);
  }

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
