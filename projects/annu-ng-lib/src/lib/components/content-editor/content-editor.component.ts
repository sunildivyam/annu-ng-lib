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
  constructor() { }

  ngOnInit(): void {
  }

  public contentChanged(el: EditorElement) {
    this.changed.emit(this.editorElement);
  }
}
