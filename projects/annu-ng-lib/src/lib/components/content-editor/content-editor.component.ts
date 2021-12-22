import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EditorElement } from './content-editor.interface';
import { EDITOR_ROOT_ELEMENT, TOOLBAR_FORMATTING } from './constants';
import { ToolbarItem } from '../toolbar';
import { SelectionService } from './services/selection.service';
import { Link } from '.';

@Component({
  selector: 'anu-content-editor',
  templateUrl: './content-editor.component.html',
  styleUrls: ['./content-editor.component.scss']
})
export class ContentEditorComponent implements OnInit {
  @Input() value: EditorElement = { ...EDITOR_ROOT_ELEMENT };
  @ViewChild('popup', { static: true }) popupEl: ElementRef;
  @Output() changed = new EventEmitter<EditorElement>();

  selectionRect: DOMRect;
  isTextSelected: boolean = false;
  formattingToolbar: Array<ToolbarItem> = TOOLBAR_FORMATTING;

  link: Link = {
    href: 'https://',
    label: '',
    title: '',
    target: '_blank'
  };
  toggleLinkForm: boolean = false;

  constructor(private selService: SelectionService) {
    this.selectionRect = new DOMRect(0, 0);
    this.selService.selection.subscribe(this.handleTextSelection);
  }


  handleTextSelection = (hasSelection: boolean) => {
    this.isTextSelected = hasSelection;
    if (hasSelection) {
      setTimeout(() => {
        this.selectionRect = this.selService.getSelectionRect();
        if (this.selectionRect) this.selectionRect.y = this.selectionRect.top - this.popupEl.nativeElement.offsetHeight - this.selectionRect.height;
      })
    }
  }

  ngOnInit(): void {
  }


  public contentChanged(el: EditorElement) {
    this.changed.emit(this.value);
  }

  public saveLink(event: any): void {
    event.preventDefault();
    this.selService.addLink(this.link);
    this.toggleLinkForm = !this.toggleLinkForm;
    this.isTextSelected = false;
  }

  public cancelLink(event: any): void {
    event.preventDefault();
    this.toggleLinkForm = !this.toggleLinkForm;
  }

  public formattingToolbarSelected(toolbarItem: ToolbarItem): void {
    switch (toolbarItem.name) {
      case 'link':
        this.link = {
          href: 'https://',
          label: this.selService.selectionText,
          title: this.selService.selectionText,
          target: '_blank'
        };
        this.toggleLinkForm = !this.toggleLinkForm;
        break;
      case 'bold':
        this.selService.addFormating('b');
        this.isTextSelected = false;
        break;
      case 'italic':
        this.selService.addFormating('i');
        this.isTextSelected = false;
        break;
      case 'underline':
        this.selService.addFormating('u');
        this.isTextSelected = false;
        break;
      default:
        this.isTextSelected = false;
        break;
    }
  }
}
