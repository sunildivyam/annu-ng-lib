import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { ToolbarItem } from '.';

@Component({
  selector: 'anu-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() items: Array<ToolbarItem> = [];
  @Input() isVertical: boolean = false;

  @Output() changed = new EventEmitter<ToolbarItem>();

  constructor(private injector: Injector) {
    this.items = this.injector.get('items', this.items);
    this.isVertical = this.injector.get('isVertical', this.isVertical);
    this.changed = this.injector.get('changed', this.changed);
  }

  ngOnInit(): void {
  }

  public itemClicked(event: any, item: ToolbarItem): void {
    if (!item.href) {
      event.preventDefault();
    }

    this.changed.emit(item);
  }
}
