import { Injectable } from '@angular/core';
import { Link} from '../../link-form';
import { ImageInfo } from '../../image-form';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private savedSelection: Array<Range>;
  private _selection = new Subject<boolean>();

  constructor() { }
  // Get the deepest Element node in the DOM tree that contains the entire range.
  private getRangeContainer(range: Range): Node {
    let container = range.commonAncestorContainer;
    // If the selected node is a Text node, climb up to an element node - in Internet
    // Explorer, the .contains() method only works with Element nodes.
    while (container && container.nodeName !== 'ANU-CONTENT-EDITOR') {
      container = container.parentNode;
    }

    return container;
  }

  private restoreSelection(savedSel: Array<Range>): Selection {
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

  private isImageInSelection(selection: Selection) {
    if (!selection || !selection.rangeCount) return false;

    const range = selection.getRangeAt(0);

    // check if selection contains an image, if yes then Image should also be the hyperlink.
    const fragment = range.cloneContents();
    const imgs = fragment.querySelectorAll('img');

    if (imgs && imgs.length) return true

    return false;
  }

  public get selection() : Observable<boolean> {
    return this._selection.asObservable();
  }

  public get selectionText() : string {
    this.restoreSelection(this.savedSelection);
    return document.getSelection().toString();
  }

  // You can save selection because when you focus on some other element, current selection gets lost,
  // so you can save it and restore it for processing.
  public saveSelection(selection: Selection) {
    var ranges: Array<Range> = [];
    for (var i = 0, len = selection.rangeCount; i < len; ++i) {
      ranges.push(selection.getRangeAt(i));
    }
    this.savedSelection = ranges;

    if (selection.toString() || this.isImageInSelection(selection)) {
      this._selection.next(true);
    } else {
      this._selection.next(false);
    }
  }

  public getSelectionRect(): DOMRect | null {
    const selection = this.restoreSelection(this.savedSelection);
    if (!selection || selection.type !== 'Range' || !selection.rangeCount) {
      return;
    }

    // // save selection for later use
    // this.saveSelection(selection);

    // Calculate the selection bounding rectangle
    const range = selection.getRangeAt(0);
    const rangeContainer = this.getRangeContainer(range) as Element;
    if (!rangeContainer) {
      return;
    }
    const rangeRect = range.getBoundingClientRect();
    const rangeContainerRect = rangeContainer.getBoundingClientRect();
    const selectionRect: DOMRect = new DOMRect(
      rangeRect.left - rangeContainerRect.left,
      rangeRect.top - rangeContainerRect.top,
      rangeRect.width,
      rangeRect.height,
    );

    return selectionRect;
  }


  public addLink(link: Link) {
    const selection = this.restoreSelection(this.savedSelection);
    if (!selection || selection.type !== 'Range' || !selection.rangeCount) {
      return;
    }

    const selectionText = selection.toString();
    if (!selectionText && !this.isImageInSelection(selection)) {
      return;
    }

    const range = selection.getRangeAt(0);

    // check if selection contains an image, if yes then Image should also be the hyperlink.
    const fragment = range.cloneContents();
    const imgs = fragment.querySelectorAll('img');
    let linkContentNode: any = document.createTextNode(link.label);
    if (imgs && imgs.length) {
      linkContentNode = fragment;
    }

    // create a new Link
    var newLink = document.createElement("a");
    newLink.target = link.target;
    newLink.href = link.href;
    newLink.title = link.title;
    newLink.appendChild(linkContentNode);

    // replace selection with Link
    range.deleteContents();
    range.insertNode(newLink);
  }

  public addImage(image: ImageInfo) {
    const selection = this.restoreSelection(this.savedSelection);
    if (!selection || selection.type !== 'Range' || !selection.rangeCount) {
      return;
    }

    const selectionText = selection.toString();
    if (!selectionText && !this.isImageInSelection(selection)) {
      return;
    }

    const range = selection.getRangeAt(0);

    // create a new Image
    var newImage = document.createElement("img");
    newImage.src = image.src;
    newImage.alt = image.alt;
    // newImage.appendChild(newImage);

    // replace selection with Image
    range.deleteContents();
    range.insertNode(newImage);
  }

  public addFormating(tagName: string) {
    const selection = this.restoreSelection(this.savedSelection);
    if (!selection || selection.type !== 'Range' || !selection.rangeCount) {
      return;
    }

    const selectionText = selection.toString();
    if (!selectionText) {
      return;
    }

    const range = selection.getRangeAt(0);

    // create a new formatting Element
    var newEl = document.createElement(tagName);
    var textNode = document.createTextNode(selectionText);
    newEl.appendChild(textNode);

    // replace selection with new formatting element
    range.deleteContents();
    range.insertNode(newEl);
  }
}
