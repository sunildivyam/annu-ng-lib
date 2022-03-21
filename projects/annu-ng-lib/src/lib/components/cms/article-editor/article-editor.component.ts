import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Article } from '../article/article.interface';
import { EditorElement, EDITOR_ROOT_ELEMENT } from '../content-editor';
import { ImageInfo } from '../../common-ui/image-form';
import { MetaInfo } from '../../common-ui/meta';
import { Tab } from '../../common-ui/tabs';
import { ARTICLE_EDITOR_TABS } from './constants';
import { UtilsService } from '../../../services/utils';
import { Category } from '../category/category.interface';

const SAMPLE_ARTICLE = {
  body: EDITOR_ROOT_ELEMENT,
  metaInfo: {
    title: EDITOR_ROOT_ELEMENT.children[0]?.data?.text,
    description: EDITOR_ROOT_ELEMENT.children[1]?.data?.text,
  }
};

@Component({
  selector: 'anu-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss']
})
export class ArticleEditorComponent implements OnInit, OnChanges {
  @Input() value: Article | null;
  @Input() categories: Array<Category> = [];
  @Output() changed = new EventEmitter<Article>();
  @Output() saveClicked = new EventEmitter<Article>();

  toggleImageForm: boolean = false;
  tabs: Array<Tab> = ARTICLE_EDITOR_TABS.map(t => ({ ...t }));

  activeTab = this.tabs[0];
  article: Article;
  sampleArticle: Article;
  selectedArticleCategories: Array<any> = [];
  categoriesMultiSelectItems: Array<any> = [];

  constructor(private utils: UtilsService) {
    this.sampleArticle = { ...SAMPLE_ARTICLE, id: this.utils.toDashedString(SAMPLE_ARTICLE.metaInfo.title), created: utils.currentDate, updated: utils.currentDate };
    this.article = { ...this.sampleArticle };
  }

  private initArticle() {
    if (this.value) {
      this.article = { ...this.value };
    } else {
      this.article = { ...this.sampleArticle };
    }

    this.selectedArticleCategories = this.article.categories?.map(cat => ({ id: cat }));
    this.categoriesMultiSelectItems = this.categories?.map(cat => ({ id: cat?.id, title: cat?.metaInfo?.title }));
  }

  ngOnInit(): void {
    this.initArticle();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initArticle();
  }

  public tabChanged(tab: Tab) {
    this.activeTab = tab;
  }

  public articleBodyChanged(body: EditorElement) {
    this.article = { ...this.article, body: { ...body } };
    this.changed.emit({ ...this.article });
  }

  public articleMetaChanged(metaInfo: MetaInfo) {
    this.article.id = this.utils.toDashedString(metaInfo.title);
    this.article = { ...this.article, metaInfo: { ...metaInfo } };
    this.changed.emit({ ...this.article });
  }

  public onCategoriesChanged(selectedCategories: Array<any> = []): void {
    this.article = { ...this.article, categories: selectedCategories?.map(cat => cat?.id) };
    this.selectedArticleCategories = [...selectedCategories];
    this.changed.emit({ ...this.article });
  }

  public isLiveChanged(isLive: boolean): void {
    this.article = { ...this.article, isLive };
    this.changed.emit({ ...this.article });
  }

  public changeImage(event: any, clear: boolean = false) {
    event.preventDefault();
    if (clear === true) {
      this.article.image = null;
      this.changed.emit({ ...this.article });
    } else {
      this.toggleImageForm = !this.toggleImageForm;
    }
  }

  public cancelImageChange() {
    this.toggleImageForm = !this.toggleImageForm;
  }

  public saveImageChange(image: ImageInfo) {
    this.article.image = image;
    this.toggleImageForm = !this.toggleImageForm;
    this.changed.emit({ ...this.article });
  }

  public saveArticle(event: any): void {
    event.preventDefault();
    this.saveClicked.emit({ ...this.article });
  }
}
