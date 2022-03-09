import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ArticlesFirebaseService } from '../../../firebase/articles';
import { Category } from '../category';
import { Article, CategoryGroup } from '../article';

@Component({
  selector: 'anu-category-articles-list',
  templateUrl: './category-articles-list.component.html',
  styleUrls: ['./category-articles-list.component.scss']
})
export class CategoryArticlesListComponent implements OnInit, OnChanges {
  @Input() category: Category | null;
  @Input() pageSize: number = 0;
  @Input() orderBy: string;
  @Input() headerClassNames: Array<string> = [];
  @Input() listClassNames: Array<string> = [];
  @Input() href: string = '';

  @Output() loadStarted: EventEmitter<void> = new EventEmitter<void>();
  @Output() loadEnded: EventEmitter<CategoryGroup> = new EventEmitter<CategoryGroup>();

  noDataMessage: string = '';
  error: any;
  categoryArticles: Array<Article> = [];

  constructor(private articlesFireSvc: ArticlesFirebaseService) { }

  private emitLoadEnded() {
    this.loadEnded.emit({
      category: this.category,
      articles: this.categoryArticles,
    } as CategoryGroup);
  }

  private async loadCategoryArticles() {
    this.error = null;
    this.loadStarted.emit();

    if (!this.category || (this.category && !this.category.id) || !this.pageSize) {
      this.error = { code: 'INVALID_PROPERTY', message: 'Either of the category or pageSize is invalid.' }
      this.categoryArticles = [];
      this.emitLoadEnded();

      return;
    }

    try {
      this.categoryArticles = await this.articlesFireSvc.getArticles({
        isLive: true,
        articleCategoryId: this.category?.id,
        orderField: this.orderBy,
        pageSize: this.pageSize,
        isNextPages: true,
        startPage: null
      });

      this.emitLoadEnded();

    } catch (error) {
      this.error = error;
      this.categoryArticles = [];
      this.emitLoadEnded();
    }
  }

  ngOnInit(): void {
    this.loadCategoryArticles();
  }

  ngOnChanges(): void {
    this.loadCategoryArticles();
  }
}
