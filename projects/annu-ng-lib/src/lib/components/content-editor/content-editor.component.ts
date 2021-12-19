import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TextSelectionEvent, EditorElement } from './content-editor.interface';
import { EDITOR_ROOT_ELEMENT, TOOLBAR_FORMATTING } from './constants';
import { ToolbarItem } from '../toolbar';
import { ContentEditorService } from './content-editor.service';
import { Link } from '.';

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
  formattingToolbar: Array<ToolbarItem> = TOOLBAR_FORMATTING;
  textSelection: Selection;
  savedSelection: Array<Range> = [];
  link: Link = {
    href: 'https://',
    label: '',
    title: '',
    target: '_blank'
  };
  toggleLinkForm: boolean = false;

  constructor(private cdr: ChangeDetectorRef, private ceService: ContentEditorService) {
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
      this.textSelection = selectionEvent.selection;

      setTimeout(() => {
        this.selectionRect.y = this.selectionRect.top - this.popupEl.nativeElement.offsetHeight - this.selectionRect.height;
      })
    } else {
      if (!this.toggleLinkForm) {
        this.isTextSelected = false;
      }
      this.cdr.detectChanges();
    }
  }

  public saveLink(event: any): void {
    event.preventDefault();
    this.textSelection = this.ceService.restoreSelection(this.savedSelection);
    this.ceService.addLink(this.textSelection, this.link);
    this.toggleLinkForm = !this.toggleLinkForm;
    this.isTextSelected = false;
  }

  public cancelLink(event: any): void {
    event.preventDefault();
    this.toggleLinkForm = !this.toggleLinkForm;
    this.textSelection = this.ceService.restoreSelection(this.savedSelection);
  }

  public formattingToolbarSelected(toolbarItem: ToolbarItem): void {
    switch (toolbarItem.name) {
      case 'link':
        const selectionText = this.textSelection.toString();
        this.savedSelection = this.ceService.saveSelection(this.textSelection);

        this.link = {
          href: 'https://',
          label: selectionText,
          title: selectionText,
          target: '_blank'
        };
        this.toggleLinkForm = !this.toggleLinkForm;
        break;
      case 'bold':
        this.ceService.addFormating(this.textSelection, 'b');
        this.isTextSelected = false;
        break;
      case 'italic':
        this.ceService.addFormating(this.textSelection, 'i');
        this.isTextSelected = false;
        break;
      case 'underline':
        this.ceService.addFormating(this.textSelection, 'u');
        this.isTextSelected = false;
        break;
      default:
        this.isTextSelected = false;
        break;
    }
  }
}
