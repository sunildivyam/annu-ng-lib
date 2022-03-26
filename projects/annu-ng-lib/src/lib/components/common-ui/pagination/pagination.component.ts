import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { Page } from './pagination.interface';


/**
 * Pagination component provides an UI for navigating through a bunch of pages of data. Provides previous, next and range of pages buttons for navigation.
 *
 * @date 21/2/2022 - 1:59:46 pm
 *
 * @export
 * @class PaginationComponent
 * @typedef {PaginationComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'anu-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() activePage: number = 0;
  @Input() totalCount: number = 0;
  @Input() pageSize: number = 0;
  @Input() pageUrl: string = '';
  @Input() showPageRange: boolean = true;
  @Output() changed = new EventEmitter<Page>();

  previousPage: number = 0;
  nextPage: number = 0;
  rangePages: Array<number> = [];
  pageCount: number = 0;

  constructor(private injector: Injector) {
    this.activePage = this.injector.get('activePage', this.activePage);
    this.totalCount = this.injector.get('totalCount', this.totalCount);
    this.pageSize = this.injector.get('pageSize', this.pageSize);
    this.pageUrl = this.injector.get('pageUrl', this.pageUrl);
    this.showPageRange = this.injector.get('showPageRange', this.showPageRange);
    this.changed = this.injector.get('changed', this.changed);
  }

  private recalculatePagination(): void {
    // set pageCount
    this.pageCount = Math.ceil(this.totalCount / this.pageSize);
    // set rangePages
    this.rangePages = [];
    for (let i = 1; i <= this.pageCount; i++) {
      this.rangePages.push(i);
    }
    // set previous Page
    this.previousPage = this.activePage - 1;
    // set next Page
    if (this.activePage === this.totalCount) {
      this.nextPage = 0;
    } else {
      this.nextPage = this.activePage + 1;
    }
  }

  private emitPageChanged(): void {
    const page: Page = {
      activePage: this.activePage,
      totalCount: this.totalCount,
      pageSize: this.pageSize,
      pageUrl: this.pageUrl,
    };

    this.changed.emit(page);
  }

  ngOnInit(): void {
    this.recalculatePagination();
  }

  ngOnChanges(): void {
    this.recalculatePagination();
  }

  public pageLink(pageNo: number): string {
    if (!this.pageUrl) {
      return '#';
    }

    return `${this.pageUrl}/${pageNo}`;
  }

  public previousClicked(event) {
    if (!this.pageUrl) {
      event.preventDefault();
    }
    if (this.activePage > 1) {
      this.activePage--;
      this.emitPageChanged();
    }
  }

  public nextClicked(event) {
    if (!this.pageUrl) {
      event.preventDefault();
    }
    if (this.activePage < this.pageCount) {
      this.activePage++;
      this.emitPageChanged();
    }
  }

  public pageClicked(event, pageNo: number) {
    if (!this.pageUrl) {
      event.preventDefault();
    }
    this.activePage = pageNo;
    this.emitPageChanged();
  }
}
