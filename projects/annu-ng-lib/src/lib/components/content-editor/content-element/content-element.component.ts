import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditorElement } from '../content-editor.interface';

@Component({
  selector: 'anu-content-element',
  templateUrl: './content-element.component.html',
  styleUrls: ['./content-element.component.scss']
})
export class ContentElementComponent implements OnInit {
  @Input() editorElement: EditorElement = {} as EditorElement;
  @Input() fullTree: EditorElement = {} as EditorElement;
  @Output() changed = new EventEmitter<EditorElement>();

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
    let index = this.editorElement.items.indexOf(el);

    if (this.editorElement.items.length > 1) {
      this.editorElement.items.splice(index, 1);
      this.editorElement.items[index === 0 ? index : index - 1].focused = true;
    } else {
      
    }
  }

  // private removeRecursive(el: EditorElement, edItem: EditorElement) {
  //   if (!edItem.items) return;
  //   let index = edItem.items.indexOf(el);
  //   if (index >= 0) {
  //     if (edItem.items.length > 1) {
  //       edItem.items.splice(index, 1);
  //       edItem.items[index === 0 ? index : index - 1].focused = true;
  //     } else {
  //       edItem = null;
  //     }
  //   } else {
  //     edItem.items.forEach(item => {
  //       this.removeRecursive(el, item);
  //     });
  //   }
  //   console.log(this.fullTree);
  // }

  public enterKeyPressed(el: EditorElement) {
    this.addNewEditorElement(el);
    this.cdr.detectChanges();
  }

  public backspaceKeyPressed(el: EditorElement) {
    // this.removeRecursive(el, this.fullTree);
    this.removeEditorElement(el);
    this.cdr.detectChanges();
  }

  public contentChanged(el: EditorElement) {
    this.changed.emit(this.editorElement);
  }
}
