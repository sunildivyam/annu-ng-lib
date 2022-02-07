import { Component, OnInit } from '@angular/core';
import { Category } from '@annu-ng-lib';

@Component({
  selector: 'anu-category-editor-page',
  templateUrl: './category-editor-page.component.html',
  styleUrls: ['./category-editor-page.component.scss']
})
export class CategoryEditorPageComponent implements OnInit {
  public category: Category;

  constructor() { }

  ngOnInit(): void {
  }

  public categoryChanged(category: Category): void {
    console.log(category);
  }
}
