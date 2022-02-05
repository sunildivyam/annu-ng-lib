import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

const DEBOUNCE_TIME = 800;

/**
 * SearchBox component allows to filter any objects from an array based on the passed keys.
 * Typeahead featured input box.
 *
 * @export
 * @class SearchBoxComponent
 * @typedef {SearchBoxComponent}
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'anu-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input() items: Array<Object> = [];
  @Input() keys: Array<string> = [];
  @Output() changed = new EventEmitter<Array<Object>>();

  keywords: string = '';
  keywordsSubject: Subject<string> = new Subject<string>();
  keywordsSubscription: Subscription

  constructor() {

  }

  private filter(): Array<Object> {
    const filteredItems = this.items.filter(it => {
      let found = false;
      this.keys.forEach(key => {
        const value = it[key] || '';
        if (value.toLowerCase().includes(this.keywords.toLocaleLowerCase())) {
          found = true;
        }
      })
      return found;
    });

    return filteredItems;
  }

  ngOnInit(): void {
    this.keywordsSubscription = this.keywordsSubject
      .pipe(debounceTime(DEBOUNCE_TIME), distinctUntilChanged())
      .subscribe(term => {
        this.keywords = term;
        const filteredItems = this.filter();
        this.changed.emit(filteredItems)
      });
  }

  ngOnDestroy(): void {
      this.keywordsSubscription.unsubscribe();
  }

  public keywordsModelChanged(term: string):void {
    this.keywordsSubject.next(term);
  }
}
