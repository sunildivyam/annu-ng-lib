import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EDITOR_ROOT_ELEMENT } from './constants';
import { EditorElement } from './content-editor.interface';

@Component({
  selector: 'anu-content-editor',
  templateUrl: './content-editor.component.html',
  styleUrls: ['./content-editor.component.scss']
})
export class ContentEditorComponent implements OnInit {
  @Output() changed = new EventEmitter<EditorElement>();
  editorElement: EditorElement = EDITOR_ROOT_ELEMENT;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  private getEditorElementName(elType: string): string {
    return `${elType}-${Date.now()}`;
  }

  private addNewEditorElement(el: EditorElement) {
    const index = this.editorElement.items.indexOf(el);
    const oldEl = { ...el };
    this.editorElement.items.forEach(elm => elm.focused = false);

    this.editorElement.items.splice(index + 1, 0, {
      type: oldEl.type,
      subType: oldEl.subType,
      text: '',
      name: this.getEditorElementName(oldEl.type),
      focused: true
    } as EditorElement);
  }

  private removeEditorElement(el: EditorElement) {
    const index = this.editorElement.items.indexOf(el);
    if (index === 0) {
      return;
    }

    this.editorElement.items.splice(index, 1);
    this.editorElement.items[index - 1].focused = true;
  }

  public enterKeyPressed(el: EditorElement) {
    this.addNewEditorElement(el);
    this.cdr.detectChanges();
  }

  public backspaceKeyPressed(el: EditorElement) {
    this.removeEditorElement(el);
    this.cdr.detectChanges();
  }

  public contentChanged(el: EditorElement) {
    this.changed.emit(this.editorElement);
  }
}
