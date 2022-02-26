import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UtilsService } from '../../../services';
import { Category } from '../category';

const SAMPLE_CATEGORY = { id: 'sample-category-title', isLive: false, shortTitle: 'Sample Category Short Title', title: 'Sample Category Title', description: 'Sample category description text' };

@Component({
  selector: 'anu-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.scss']
})
export class CategoryEditorComponent implements OnInit, OnChanges {
  @Input() value: Category | null;
  @Output() changed = new EventEmitter<Category>();
  @Output() saveClicked = new EventEmitter<Category>();

  public pCategory: Category;

  constructor(private utils: UtilsService) {
    this.value = { ...SAMPLE_CATEGORY };
  }

  ngOnInit(): void {
    this.pCategory = this.value ? { ...this.value } : { ...SAMPLE_CATEGORY };
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pCategory = this.value ? { ...this.value } : { ...SAMPLE_CATEGORY };
  }

  public onChanged(event: any): void {
    this.changed.emit({ ...this.pCategory });
  }

  public titleChanged(event: any): void {
    this.pCategory.id = this.utils.toDashedString(this.pCategory.title);
  }

  public isLiveChanged(isLive: boolean): void {
    this.pCategory.isLive = isLive;
    this.changed.emit({ ...this.pCategory });
  }

  public save(event: any): void {
    event.preventDefault();
    this.saveClicked.emit({ ...this.pCategory });
  }
}
