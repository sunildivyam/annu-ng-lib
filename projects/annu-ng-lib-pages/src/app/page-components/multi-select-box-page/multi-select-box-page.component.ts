import { Component, OnInit } from '@angular/core';
import { SAMPLE_ITEMS } from './config';

@Component({
  selector: 'anu-multi-select-box-page',
  templateUrl: './multi-select-box-page.component.html',
  styleUrls: ['./multi-select-box-page.component.scss']
})
export class MultiSelectBoxPageComponent implements OnInit {
  items: Array<Object> = [...SAMPLE_ITEMS];
  selectedItems: Array<Object> = [SAMPLE_ITEMS[1], SAMPLE_ITEMS[2]];

  constructor() { }

  ngOnInit(): void {
  }

  public onChanged(selectedItems: Array<Object>): void {
    console.log('Selected Items count: ', selectedItems?.length);
  }
}
