import { Injectable } from '@angular/core';
import { EditorElement} from '../content-editor.interface';
import { ImageInfo } from '../../../common-ui';

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
    // if the element to remove is the only child of root, then do not remove
    if (fullTree.children.length === 1) {
      return;
    }

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

  public replaceElement(el: EditorElement, tagName: string, fullTree: EditorElement, data: ImageInfo = null) {

    if (el.tagName === 'li') {
      const parent = this.findParent(el, fullTree);
      if (['ol', 'ul'].includes(tagName)) {
        if (parent.tagName !== tagName) {
          parent.name = this.getEditorElementName(tagName);
          parent.tagName = tagName;
        }
      } else {
        // remove LI and add copy as new item below the parent List (ul/ol)
        const newItem = { ...el };
        newItem.tagName = tagName;
        newItem.name = this.getEditorElementName(tagName);
        if (tagName === 'img' && data) {
          newItem.data.src = data.src;
          newItem.data.alt = data.alt;
          newItem.data.text = undefined;
        }

        const parentOfParent = this.findParent(parent, fullTree);
        let indexOfParent = parentOfParent.children.indexOf(parent);
        if (parent.children.length > 1) {
          indexOfParent++;
        }
        this.removeEditorElement(el, fullTree);
        this.setFocusOffAll(fullTree);
        parentOfParent.children.splice(indexOfParent, 0, newItem);
      }
    } else {
      if (['ol', 'ul'].includes(tagName)) {
        const newListItem = { ...el };
        newListItem.tagName = 'li';
        newListItem.name = this.getEditorElementName('li');
        if (el.tagName === 'img') {
          newListItem.data.text = newListItem.data.alt;
          newListItem.data.alt = undefined;
          newListItem.data.src = undefined;
        }

        el.tagName = tagName;
        el.name = this.getEditorElementName(tagName);
        el.isContainer = true;
        el.children = [newListItem];
        el.data = undefined;
        el.focused = undefined;
      } else {
        if (tagName === 'img' && data) {
          el.data.src = data.src;
          el.data.alt = data.alt;
          el.data.text = undefined;
        }
        el.tagName = tagName;
        el.name = this.getEditorElementName(tagName);
      }
    }


    /*
      if source LI
        if  Bullet/Numbering
          find parent and change type to ol/ul
        else
          hide toolbar icons => p/H1-H6
      else
        if (target == ul/ol)
          change name
          isContainer = true
          add one child LI and focus
        else
          change name as is
    */
  }
}
