import { AfterContentChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ToolbarItem } from '@annu-ng-lib';
import { EditorElement } from '../content-editor.interface';
import { ImageInfo } from '../../../common-ui';
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
  toggleImageForm: boolean = false;
  imageInfo: ImageInfo = {
    src: 'https://',
    alt: ''
  };

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
    if (item.name === 'img') {
      this.toggleImageForm = true;
      this.imageInfo.alt = this.editorElement.data?.alt || this.editorElement.data?.text;
    } else {
      this.ceService.replaceElement(this.editorElement, item.name, this.fullTree);
      this.isToolbar = !this.isToolbar;
    }
  }

  public cancelImageModal() {
    this.toggleImageForm = false;
  }

  public saveImage(image: ImageInfo) {
    this.ceService.replaceElement(this.editorElement, 'img', this.fullTree, image);
    this.toggleImageForm = false;
    this.isToolbar = !this.isToolbar;
  }
}
