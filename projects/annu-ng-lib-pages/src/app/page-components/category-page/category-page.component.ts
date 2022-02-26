import { Component, OnInit } from '@angular/core';
import { Category } from '@annu/ng-lib';
import { CATEGORY } from './config';


@Component({
  selector: 'anu-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  public category: Category;

  constructor() {
    this.category = { ...CATEGORY };
  }

  ngOnInit(): void {
  }

  public onUpdateClicked($event): void {
    console.info('Update button clicked');
  }
}
