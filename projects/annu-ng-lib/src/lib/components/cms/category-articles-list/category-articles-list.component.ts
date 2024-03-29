import { Component, Input } from '@angular/core';
import { Category } from '../category/category.interface';
import { Article } from '../article/article.interface';

@Component({
  selector: 'anu-category-articles-list',
  templateUrl: './category-articles-list.component.html',
  styleUrls: ['./category-articles-list.component.scss']
})
export class CategoryArticlesListComponent {
  @Input() category: Category | null | undefined;
  @Input() articles: Array<Article> = [];
  @Input() headerClassNames: Array<string> = [];
  @Input() listClassNames: Array<string> = [];
  @Input() href: string = '';

  noDataMessage: string = 'No data Available';

  constructor() {}
}
