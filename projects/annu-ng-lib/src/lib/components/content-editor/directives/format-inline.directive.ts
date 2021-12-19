import { ChangeDetectorRef, Directive, EventEmitter, HostListener, NgZone, OnDestroy, OnInit } from '@angular/core';
import { TextSelectionEvent } from '../content-editor.interface';
import { ContentEditorService } from '../content-editor.service';

@Directive({
  selector: '[anuFormatInline]',
  outputs: ['selected: anuFormatInline']
})
export class FormatInlineDirective implements OnInit, OnDestroy {
  selected = new EventEmitter<TextSelectionEvent>();

  constructor(private ceService: ContentEditorService, private zone: NgZone) { 
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
  }

  public ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      document.addEventListener('selectionchange', this.handleSelectionChange, false);
    })
  }

  public ngOnDestroy(): void {
    document.removeEventListener('selectionchange', this.handleSelectionChange, false);
  }

  @HostListener('mouseup', ['$event'])
  public onClick(event: any) {
    const selection = event.view.getSelection();

    const selectionRect = this.ceService.getSelectionRect(selection);    
    this.selected.emit({ text: selection.toString(), selection, selectionRect } as TextSelectionEvent);    

    this.ceService.addLink(selection);
  }

  private handleSelectionChange(event: any) {
    if (!event.target.getSelection().toString()) {      
      this.selected.emit();
    }
  }
}
