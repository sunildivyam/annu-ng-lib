import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'anu-multi-select-box',
  templateUrl: './multi-select-box.component.html',
  styleUrls: ['./multi-select-box.component.scss']
})
export class MultiSelectBoxComponent implements OnInit {
  @Input() items: Array<any> = [];
  @Input() selectedItems: Array<any> = [];
  @Input() keyField: string = '';
  @Input() labelField: string = '';

  @Output() changed: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  constructor(private injector: Injector) {
    this.items = this.injector.get('items', this.items);
    this.selectedItems = this.injector.get('selectedItems', this.selectedItems);
    this.keyField = this.injector.get('keyField', this.keyField);
    this.labelField = this.injector.get('labelField', this.labelField);
    this.changed = this.injector.get('changed', this.changed);
  }

  ngOnInit(): void {
  }

  public isItemSelected(item: any): boolean {
    if (!this.selectedItems) this.selectedItems = [];

    return !!this.selectedItems.find(it => it[this.keyField] === item[this.keyField]);
  }

  public onChanged(event: any, item: any): void {
    if (!this.selectedItems) this.selectedItems = [];

    if (event.target.checked) {
      this.selectedItems.push({ ...item });
    } else {
      this.selectedItems = this.selectedItems.filter(it => it[this.keyField] !== item[this.keyField]);
    }

    this.changed.emit([...this.selectedItems]);
  }
}
