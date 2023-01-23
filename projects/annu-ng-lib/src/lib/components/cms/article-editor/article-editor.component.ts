import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Article, ArticleFeatures } from '../article/article.interface';
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
  @Input() readonlyId: boolean = true;
  @Input() enableUniqueId: boolean = true;
  @Input() enablePublish: boolean = true;
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
  selectedArticleFeatures: Array<any> = [];
  articleFeatures: Array<any> = [];

  constructor(private utils: UtilsService) {
    this.sampleArticle = { ...SAMPLE_ARTICLE, id: this.utils.getUniqueFromString(SAMPLE_ARTICLE.metaInfo.title), created: utils.currentDate, updated: utils.currentDate };
    this.article = { ...this.sampleArticle };
    this.articleFeatures = Object.keys(ArticleFeatures).map(key => ({ id: key, title: key }));
  }

  private initArticle() {
    if (this.value) {
      this.article = { ...this.value, metaInfo: { ...this.value.metaInfo } };
    } else {
      this.article = { ...this.sampleArticle, metaInfo: { ...this.sampleArticle.metaInfo } };
      this.value = { ...this.sampleArticle, metaInfo: { ...this.sampleArticle.metaInfo } };
    }

    // Init Article Categories
    this.selectedArticleCategories = this.article.categories?.map(cat => ({ id: cat }));
    this.categoriesMultiSelectItems = this.categories?.map(cat => ({ id: cat?.id, title: cat?.metaInfo?.title }));

    // Init ArticleFeatures
    this.selectedArticleFeatures = this.article.features?.map(f => ({ id: f }));
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
    if (metaInfo.title !== this.value.metaInfo.title) {
      this.article.id = this.enableUniqueId ? this.utils.getUniqueFromString(metaInfo.title) : this.utils.toDashedString(metaInfo.title);
    } else {
      this.article.id = this.value.id;
    }

    this.article = { ...this.article, metaInfo: { ...metaInfo } };
    this.changed.emit({ ...this.article });
  }

  public onCategoriesChanged(selectedCategories: Array<any> = []): void {
    this.article = { ...this.article, categories: selectedCategories?.map(cat => cat?.id) };
    this.selectedArticleCategories = [...selectedCategories];
    this.changed.emit({ ...this.article });
  }

  public onArticleFeaturesChanged(selectedArticleFeatures: Array<any> = []): void {
    this.article = { ...this.article, features: selectedArticleFeatures?.map(f => f.id) };
    this.selectedArticleFeatures = [...selectedArticleFeatures];
    this.changed.emit({ ...this.article });
  }

  public isLiveChanged(isLive: boolean): void {
    const inReview = isLive === true ? false : this.value.inReview;
    this.article = { ...this.article, isLive, inReview };
    this.changed.emit({ ...this.article });
  }

  public inReviewChanged(inReview: boolean): void {
    const isLive = inReview === true ? false : this.value.isLive;
    this.article = { ...this.article, isLive, inReview };
    this.changed.emit({ ...this.article });
  }

  public changeImage(event: any, clear: boolean = false) {
    event.preventDefault();
    if (clear === true) {
      this.article.image = null;
      this.changed.emit({ ...this.article });
    } else {
      this.toggleImageForm = true;
    }
  }

  public cancelImageChange() {
    this.toggleImageForm = false;
  }

  public saveImageChange(image: ImageInfo) {
    this.article.image = image;
    this.toggleImageForm = false;
    this.changed.emit({ ...this.article });
  }

  public saveArticle(event: any): void {
    event.preventDefault();
    this.saveClicked.emit({ ...this.article });
  }
}
