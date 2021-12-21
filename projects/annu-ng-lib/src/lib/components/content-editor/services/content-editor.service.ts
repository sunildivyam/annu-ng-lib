import { Injectable } from '@angular/core';
import { EditorElement, Link } from '../content-editor.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentEditorService {

  constructor() { }
  
  private getEditorElementName(elType: string): string {
    return `${elType}-${Date.now()}`;
  }

  public findParent(el: EditorElement, parent: EditorElement): EditorElement {
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

  public addNewEditorElement(el: EditorElement, fullTree: EditorElement) {
    const oldEl = { ...el };
    const parent = this.findParent(el, fullTree);
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

  public removeEditorElement(el: EditorElement, fullTree: EditorElement) {
    // Find the parent of selected Element
    const parent = this.findParent(el, fullTree);
    if (!parent) {
      console.error('No Parent found or Element is Root element itself.');
      return;
    }
    const index = parent.children.indexOf(el);
    // remove selected child
    parent.children.splice(index, 1);

    if (parent.children.length) {
      const nextOrPreviousItemIndex = index >= parent.children.length ? index - 1 : index;
      const childToFocus = parent.children[nextOrPreviousItemIndex];
      if (childToFocus.isContainer && childToFocus.children && childToFocus.children.length) {
        childToFocus.children[childToFocus.children.length - 1].focused = true;
      } else {
        childToFocus.focused = true;
      }
    } else {
      this.removeEditorElement(parent, fullTree);
    }
  }

  public setFocusOffAll(fullTree: EditorElement) {
    if (fullTree.focused) {
      fullTree.focused = false;
    }
    if (fullTree.children && fullTree.children.length) {
      fullTree.children.forEach(child => this.setFocusOffAll(child))
    }    
  }
}
