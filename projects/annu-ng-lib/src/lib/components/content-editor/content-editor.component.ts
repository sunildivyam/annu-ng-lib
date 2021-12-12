import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EditorElement } from './content-editor.interface';

@Component({
  selector: 'anu-content-editor',
  templateUrl: './content-editor.component.html',
  styleUrls: ['./content-editor.component.scss']
})
export class ContentEditorComponent implements OnInit {
  contents: Array<EditorElement> = [
    {
      type: 'h',
      subType: '1',
      text: 'Sample Para text Heading1.',
      name: this.getEditorElementName('h1')
    },
    {
      type: 'h',
      subType: '3',
      text: 'Sample Para text Heading3.',
      name: this.getEditorElementName('h3')
    },
    {
      type: 'p',
      text: 'Sample Para text content.',
      name: this.getEditorElementName('p1')
    },
    {
      type: 'p',
      text: 'Sample Para text content.2',
      name: this.getEditorElementName('p2')
    }
  ];
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  private getEditorElementName(elType: string): string {
    return `${elType}-${Date.now()}`;
  }

  private addNewEditorElement(el: EditorElement) {
    const index = this.contents.indexOf(el);
    const oldEl = { ...el };
    this.contents.forEach(elm => elm.focused = false);

    this.contents.splice(index + 1, 0, {
      type: oldEl.type,
      subType: oldEl.subType,
      text: '',
      name: this.getEditorElementName(oldEl.type),
      focused: true
    } as EditorElement);


  }

  public enterKeyPressed(el: EditorElement) {
    this.addNewEditorElement(el);
    this.cdr.detectChanges();
  }

  public contentChanged(el: EditorElement) {
    // TODO:-
  }
}
