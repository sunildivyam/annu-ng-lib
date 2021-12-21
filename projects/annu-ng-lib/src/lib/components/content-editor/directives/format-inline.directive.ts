import { Directive, EventEmitter, HostListener, NgZone, OnDestroy, OnInit } from '@angular/core';
import { SelectionService } from '../services/selection.service';

@Directive({
  selector: '[anuFormatInline]',
  outputs: ['selected: anuFormatInline']
})
export class FormatInlineDirective implements OnInit, OnDestroy {
  selected = new EventEmitter();

  constructor(private selService: SelectionService, private zone: NgZone) { 
    this.handleDocumentSelectionChange = this.handleDocumentSelectionChange.bind(this);
  }

  public ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      document.addEventListener('selectionchange', this.handleDocumentSelectionChange, false);
    })
  }

  public ngOnDestroy(): void {
    document.removeEventListener('selectionchange', this.handleDocumentSelectionChange, false);
  }

  public setSelection(selection: Selection) {    
    this.selService.saveSelection(selection);
    this.selected.emit();
  }

  @HostListener('mouseup', ['$event'])
  public onMouseUp(event: any) {
    this.setSelection(event.view.getSelection());
  }

  private handleDocumentSelectionChange(event: any) {
    if (!event.target.getSelection().toString()) {          
      // this.selected.emit();
    }
  }
}
