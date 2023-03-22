import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filter } from './filters.interface';

@Component({
  selector: 'anu-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() filters: Array<Filter> = [];
  @Output() changed: EventEmitter<Array<Filter>> = new EventEmitter<Array<Filter>>();

  public multiSelectChanged(filterId: string, selectedFeatures: Array<string>): void {
    this.filters.find(filter => filter.id === filterId).filter.selectedValues = selectedFeatures;
    this.changed.emit(this.filters);
  }

  public filterEnabled(filterId: string, enabled: boolean): void {
    this.changed.emit(this.filters);
  }

  public singleSelectChanged(filterId: string, value: boolean): void {
    const filter = this.filters.find(f => f.id === filterId);
    filter.filter.value = value;
    this.changed.emit(this.filters);
  }

  ngOnInit(): void {
    // TODO
  }
}
