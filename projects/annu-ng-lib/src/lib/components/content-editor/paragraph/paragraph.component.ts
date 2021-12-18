import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditorElement, Link } from '../content-editor.interface';

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

  constructor() { }

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

  public contentChanged() {
    this.changed.emit(this.value);
  }

  public dbclickPressed(event: any) {
    this.addLink(event.view.getSelection());
  }

  public addLink(selection: Selection) {
    if (!selection || selection.type !== 'Range') {
      return;
    }
    
    const selectionText = selection.toString();
    if (!selectionText) {
      return;
    }
    
    const range = selection.getRangeAt(0);
    const link: Link = {
      href: 'https://google.com',
      text: selectionText,
      title: selectionText,
      target: '_blank'

    }
    // create a new Link
    var newLink = document.createElement("a");
    var linkTextNode = document.createTextNode(link.text);
    newLink.target = link.target;
    newLink.href = link.href;
    newLink.title = link.title;
    newLink.appendChild(linkTextNode);
    
    // replace selection with Link
    range.deleteContents();
    range.insertNode(newLink);
}
}
