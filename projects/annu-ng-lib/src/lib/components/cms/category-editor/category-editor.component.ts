import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UtilsService } from '../../../services/utils';
import { Category } from '../category';
import { CATEGORY_EDITOR_TABS } from './category-editor.constants';
import { ImageInfo } from '../../common-ui/image-form';
import { MetaInfo } from '../../common-ui/meta';
import { Tab } from '../../common-ui/tabs';

const SAMPLE_CATEGORY = {
  id: 'sample-category-title',
  isLive: false,
  isFeatured: false,
  shortTitle: 'Sample Category Short Title',
  metaInfo: {
    title: 'Sample Category Title',
    description: 'Sample category description text'
  }
};

@Component({
  selector: 'anu-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.scss']
})
export class CategoryEditorComponent implements OnInit, OnChanges {
  @Input() value: Category | null;
  @Output() changed = new EventEmitter<Category>();
  @Output() saveClicked = new EventEmitter<Category>();

  toggleImageForm: boolean = false;
  tabs: Array<Tab> = CATEGORY_EDITOR_TABS.map(t => ({ ...t }));

  activeTab = this.tabs[0];
  category: Category;
  sampleCategory: Category;

  constructor(private utils: UtilsService) {
    this.sampleCategory = { ...SAMPLE_CATEGORY, id: this.utils.getUniqueFromString(SAMPLE_CATEGORY.metaInfo.title), created: utils.currentDate, updated: utils.currentDate };
    this.category = { ...this.sampleCategory };

    this.categoryMetaChanged = this.categoryMetaChanged.bind(this);
  }

  private initCategory() {
    if (this.value) {
      this.category = { ...this.value, metaInfo: { ...this.value.metaInfo } };

    } else {
      this.value = { ...this.sampleCategory, metaInfo: { ...this.sampleCategory.metaInfo } };
      this.category = { ...this.sampleCategory, metaInfo: { ...this.sampleCategory.metaInfo } };
    }
  }

  ngOnInit(): void {
    this.initCategory();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initCategory();
  }

  public tabChanged(tab: Tab) {
    this.activeTab = tab;
  }

  public categoryMetaChanged(metaInfo: MetaInfo) {
    if (metaInfo.title !== this.value?.metaInfo?.title) {
      this.category.id = this.utils.getUniqueFromString(metaInfo.title);
    } else {
      this.category.id = this.value.id;
    }

    this.category = { ...this.category, metaInfo: { ...metaInfo } };
    this.changed.emit({ ...this.category });
  }

  public isLiveChanged(isLive: boolean): void {
    this.category = { ...this.category, isLive };
    this.changed.emit({ ...this.category });
  }

  public isFeaturedChanged(isFeatured: boolean): void {
    this.category = { ...this.category, isFeatured };
    this.changed.emit({ ...this.category });
  }

  public onShortTitleChanged(event: any): void {
    this.changed.emit({ ...this.category });
  }

  public changeImage(event: any, clear: boolean = false) {
    event.preventDefault();
    if (clear === true) {
      this.category.image = null;
      this.changed.emit({ ...this.category });
    } else {
      this.toggleImageForm = !this.toggleImageForm;
    }
  }

  public cancelImageChange() {
    this.toggleImageForm = !this.toggleImageForm;
  }

  public saveImageChange(image: ImageInfo) {
    this.category.image = image;
    this.toggleImageForm = !this.toggleImageForm;
    this.changed.emit({ ...this.category });
  }

  public saveCategory(event: any): void {
    event.preventDefault();
    this.saveClicked.emit({ ...this.category });
  }
}
