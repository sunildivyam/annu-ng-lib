import { Component, OnInit } from '@angular/core';
import { Category } from '@annu/ng-lib';

@Component({
  selector: 'anu-category-articles-list-page',
  templateUrl: './category-articles-list-page.component.html',
  styleUrls: ['./category-articles-list-page.component.scss']
})
export class CategoryArticlesListPageComponent implements OnInit {
  category: Category = { id: 'start-manufacturing-business', title: 'Start Manufacturing Business' };

  constructor() { }

  ngOnInit(): void {
  }

}
