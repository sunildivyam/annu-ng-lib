import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anu-search-box-page',
  templateUrl: './search-box-page.component.html',
  styleUrls: ['./search-box-page.component.scss']
})
export class SearchBoxPageComponent implements OnInit {
  searchItems: Array<Object> = [
    {title: 'title 1', description: 'Item 1 description text'},
    {title: 'title 2', description: 'Item 2 description text'},
    {title: 'title 3', description: 'Item 3 description text'},];
  searchKeys: Array<string> = ['title', 'description'];
  filteredItems: Array<Object> = [];
  foundCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public onSearch(foundItems: Array<Object>): void {
    this.filteredItems = foundItems;
    this.foundCount = this.filteredItems.length;
  }
}
