import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToolbarItem } from '.';

@Component({
  selector: 'anu-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
@Input() items: Array<ToolbarItem> = [];
@Output() changed = new EventEmitter<ToolbarItem>();

  constructor() { }

  ngOnInit(): void {
  }

  public itemClicked(event: any, item: ToolbarItem): void {
    if (!item.href) {
      event.preventDefault();
    }
    
    this.changed.emit(item);
  }
}
