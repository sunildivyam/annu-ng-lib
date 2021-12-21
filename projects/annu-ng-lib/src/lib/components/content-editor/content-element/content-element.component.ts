import { AfterContentChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditorElement } from '../content-editor.interface';
import { ContentEditorService } from '../services/content-editor.service';

@Component({
  selector: 'anu-content-element',
  templateUrl: './content-element.component.html',
  styleUrls: ['./content-element.component.scss']
})
export class ContentElementComponent implements OnInit, AfterContentChecked {
  @Input() editorElement: EditorElement = {} as EditorElement;
  @Input() fullTree: EditorElement = {} as EditorElement;
  @Output() changed = new EventEmitter<EditorElement>();

  isToolbar: boolean = false;

  constructor(private cdr: ChangeDetectorRef, private ceService: ContentEditorService) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }

  public enterKeyPressed(el: EditorElement) {
    this.ceService.addNewEditorElement(el, this.fullTree);
  }

  public backspaceKeyPressed(el: EditorElement) {
    this.ceService.removeEditorElement(el, this.fullTree);
    this.cdr.detectChanges();    
  }

  public focusin(editorElement: EditorElement) {
    if (!this.editorElement.isContainer) {
      this.ceService.setFocusOffAll(this.fullTree);
      this.editorElement.focused = true;
    }
  }

  public onBlur(el: EditorElement) {
    this.changed.emit(this.editorElement);
  }

  public toggleToolbar(event, editorElement) {
    event.preventDefault();
    console.log('Clicked');
  }
}
