import { Component, Input, OnInit } from '@angular/core';
import { Category } from '.';

@Component({
  selector: 'anu-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() value: Category

  constructor() { }

  ngOnInit(): void {
  }

}
