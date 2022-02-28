import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'anu-multi-select-box',
  templateUrl: './multi-select-box.component.html',
  styleUrls: ['./multi-select-box.component.scss']
})
export class MultiSelectBoxComponent implements OnInit {
  @Input() items: Array<Object> = [];
  @Input() selectedItems: Array<Object | string | number> = [];
  @Input() keyField: string = '';
  @Input() labelField: string = '';

  @Output() changed: EventEmitter<Array<Object>> = new EventEmitter<Array<Object>>();

  constructor() { }

  ngOnInit(): void {
  }

  public isItemSelected(item: Object): boolean {
    if (!this.selectedItems) this.selectedItems = [];

    return !!this.selectedItems.find(it => {
      if (typeof it === 'object') {
        return it[this.keyField] === item[this.keyField];
      } else {
        return it === item[this.keyField]
      }
    });
  }

  public onChanged(event: any, item: Object): void {
    if (!this.selectedItems) this.selectedItems = [];

    if (event.target.checked) {
      const value = typeof item === 'object' ? { ...item } : item[this.keyField];
      this.selectedItems.push(value);
    } else {
      this.selectedItems = this.selectedItems.filter(it => {
        if (typeof it === 'object') {
          return it[this.keyField] !== item[this.keyField]
        } else {
          return it !== item[this.keyField]
        }
      });
    }

    this.changed.emit(this.selectedItems);
  }
}
