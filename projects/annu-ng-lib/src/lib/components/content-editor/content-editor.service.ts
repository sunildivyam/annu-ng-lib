import { Injectable } from '@angular/core';
import { EditorElement, Link } from './content-editor.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentEditorService {

  constructor() { }
  // Get the deepest Element node in the DOM tree that contains the entire range.
  private getRangeContainer(range: Range): Node {

    var container = range.commonAncestorContainer;

    // If the selected node is a Text node, climb up to an element node - in Internet
    // Explorer, the .contains() method only works with Element nodes.
    while (container.nodeName !== 'ANU-CONTENT-EDITOR') {

      container = container.parentNode;

    }

    return container;

  }

  public getSelectionRect(selection: Selection): DOMRect | null {
    if (!selection || selection.type !== 'Range') {
      return null;
    }

    const selectionText = selection.toString();
    if (!selectionText) {
      return null;
    }

    const range = selection.getRangeAt(0);
    const rangeContainer = this.getRangeContainer(range) as Element;
    const rangeRect = range.getBoundingClientRect();
    const containerRect = rangeContainer.getBoundingClientRect();
    const selectionRect: DOMRect = new DOMRect(
      rangeRect.left - containerRect.left,
      rangeRect.top - containerRect.top,
      rangeRect.width,
      rangeRect.height,
    );

    return selectionRect;
  }


  public saveSelection(selection: Selection): Array<Range> {
    var ranges: Array<Range> = [];
    for (var i = 0, len = selection.rangeCount; i < len; ++i) {
      ranges.push(selection.getRangeAt(i));
    }
    
    return ranges;
  }

  public restoreSelection(savedSel): Selection {
    if (savedSel) {
      const selection: Selection = document.getSelection();
      selection.removeAllRanges();
      for (var i = 0, len = savedSel.length; i < len; ++i) {
        selection.addRange(savedSel[i]);
      }
      return selection;
    }

    return;
  }


  public addLink(selection: Selection, link: Link) {
    if (!selection || selection.type !== 'Range') {
      return;
    }

    const selectionText = selection.toString();
    if (!selectionText) {
      return;
    }

    const range = selection.getRangeAt(0);

    // create a new Link
    var newLink = document.createElement("a");
    var linkTextNode = document.createTextNode(link.label);
    newLink.target = link.target;
    newLink.href = link.href;
    newLink.title = link.title;
    newLink.appendChild(linkTextNode);

    // replace selection with Link
    range.deleteContents();
    range.insertNode(newLink);
  }

  public addFormating(selection: Selection, tagName: string) {
    if (!selection || selection.type !== 'Range') {
      return;
    }

    const selectionText = selection.toString();
    if (!selectionText) {
      return;
    }

    const range = selection.getRangeAt(0);

    // create a new Link
    var newEl = document.createElement(tagName);
    var textNode = document.createTextNode(selectionText);    
    newEl.appendChild(textNode);

    // replace selection with Link
    range.deleteContents();
    range.insertNode(newEl);
  }

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
