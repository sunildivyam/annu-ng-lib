import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TextSelectionEvent, EditorElement } from './content-editor.interface';
import { EDITOR_ROOT_ELEMENT } from './constants';

@Component({
  selector: 'anu-content-editor',
  templateUrl: './content-editor.component.html',
  styleUrls: ['./content-editor.component.scss']
})
export class ContentEditorComponent implements OnInit {
  @ViewChild('popup', { static: true }) popupEl: ElementRef;
  @Output() changed = new EventEmitter<EditorElement>();
  editorElement: EditorElement = EDITOR_ROOT_ELEMENT;
  selectionRect: DOMRect;
  isTextSelected: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {
    this.selectionRect = new DOMRect(100, 100);
  }

  ngOnInit(): void {
  }

  public contentChanged(el: EditorElement) {
    this.changed.emit(this.editorElement);
  }

  public textSelected(selectionEvent: TextSelectionEvent) {
    if (selectionEvent && selectionEvent.text) {
      this.isTextSelected = true;
      this.selectionRect = selectionEvent.selectionRect;

      setTimeout(() => {
        this.selectionRect.y = this.selectionRect.top - this.popupEl.nativeElement.offsetHeight - this.selectionRect.height;
      })
    } else {
      this.isTextSelected = false;
      this.cdr.detectChanges();
    }
  }
}
