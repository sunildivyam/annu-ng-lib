import { AfterContentChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditorElement } from '../content-editor.interface';

@Component({
  selector: 'anu-content-element',
  templateUrl: './content-element.component.html',
  styleUrls: ['./content-element.component.scss']
})
export class ContentElementComponent implements OnInit, AfterContentChecked {
  @Input() editorElement: EditorElement = {} as EditorElement;
  @Input() fullTree: EditorElement = {} as EditorElement;
  @Output() changed = new EventEmitter<EditorElement>();

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }

  private getEditorElementName(elType: string): string {
    return `${elType}-${Date.now()}`;
  }

  private findParent(el: EditorElement, parent: EditorElement): EditorElement {
    if (!parent.isContainer || !parent.children || !parent.children.length) {
      return;
    }

    let foundParent: EditorElement;

    for (let i = 0; i < parent.children.length; i++) {
      const chEl = parent.children[i];

      if (el.name === chEl.name) {
        foundParent = parent;
        break;
      }

      foundParent = this.findParent(el, chEl);
      if (foundParent) {
        break;
      }
    }

    return foundParent;
  }

  private addNewEditorElement(el: EditorElement) {
    const oldEl = { ...el };
    const parent = this.findParent(el, this.fullTree);
    const index = parent.children.indexOf(el);
    //Remove focus from all other elements
    parent.children.forEach(ch => ch.focused = false);

    //Add element with focus
    parent.children.splice(index + 1, 0, {
      tagName: oldEl.tagName,
      name: this.getEditorElementName(oldEl.tagName),
      focused: true,
      data: {
        src: '',
        url: '',
        text: '',
        alt: '',
      }
    } as EditorElement);
  }

  private removeEditorElement(el: EditorElement) {
    // Find the parent of selected Element
    const parent = this.findParent(el, this.fullTree);
    const index = parent.children.indexOf(el);
    // remove selected child
    parent.children.splice(index, 1);
    
    if (parent.children.length) {
      const nextOrPreviousItemIndex = index >= parent.children.length? index - 1 : index;
      const childToFocus = parent.children[nextOrPreviousItemIndex];
      if (childToFocus.isContainer && childToFocus.children && childToFocus.children.length) {
        childToFocus.children[childToFocus.children.length - 1].focused = true;
      } else {
        childToFocus.focused = true;
      }
    } else {
      this.removeEditorElement(parent);
    }
  }

  public enterKeyPressed(el: EditorElement) {
    this.addNewEditorElement(el);
  }

  public backspaceKeyPressed(el: EditorElement) {
    this.removeEditorElement(el);
    this.cdr.detectChanges();
    console.log(this.fullTree);
  }

  public contentChanged(el: EditorElement) {
    this.changed.emit(this.editorElement);
  }
}
