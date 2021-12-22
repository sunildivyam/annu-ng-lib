import { AfterContentChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ToolbarItem } from '@annu-ng-lib';
import { EditorElement } from '../content-editor.interface';
import { ContentEditorService } from '../services/content-editor.service';
import { TOOLBAR_FORMATTING, TOOLBAR_STYLES } from '../constants';

@Component({
  selector: 'anu-content-element',
  templateUrl: './content-element.component.html',
  styleUrls: ['./content-element.component.scss']
})
export class ContentElementComponent implements OnInit, AfterContentChecked, OnChanges {
  @Input() editorElement: EditorElement = {} as EditorElement;
  @Input() fullTree: EditorElement = {} as EditorElement;
  @Output() changed = new EventEmitter<EditorElement>();

  isToolbar: boolean = false;
  styleToolbar: Array<ToolbarItem> = TOOLBAR_STYLES;

  constructor(private cdr: ChangeDetectorRef, private ceService: ContentEditorService) { }

  ngOnInit(): void {
    this.setStyleToolbarItems();
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setStyleToolbarItems();    
  }

  private setStyleToolbarItems() {
    if (this.editorElement.tagName === 'li') {
      // this.styleToolbar = this.styleToolbar.filter(item => ['ul', 'ol'].includes(item.name)) // disable non list elements
    }
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
      this.isToolbar = false;
    }
  }

  public onBlur(el: EditorElement) {
    this.changed.emit(this.editorElement);
  }

  public toggleToolbar(event, editorElement) {
    event.preventDefault();
    this.isToolbar = !this.isToolbar;
  }

  public styleToolbarSelected(item: ToolbarItem) {   
    this.ceService.replaceElement(this.editorElement, item.name, this.fullTree);
    this.isToolbar = !this.isToolbar;
  }
}
