import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Article } from '../article';
import { EditorElement, EDITOR_ROOT_ELEMENT } from '../content-editor';
import { ImageInfo, MetaInfo, Tab } from '../../common-ui';
import { ARTICLE_EDITOR_TABS } from './constants';
import { UtilsService } from '../../../services';

const SAMPLE_ARTICLE = {
  id: 'sample-article',
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
  @Input() value: Article;
  @Output() changed = new EventEmitter<Article>();
  @Output() saveClicked = new EventEmitter<Article>();

  toggleImageForm: boolean = false;
  tabs: Array<Tab> = ARTICLE_EDITOR_TABS.map(t => ({ ...t }));

  activeTab = this.tabs[0];
  article: Article;
  sampleArticle: Article;

  constructor(private utils: UtilsService) {
    this.sampleArticle = { ...SAMPLE_ARTICLE, created: utils.currentDate, updated: utils.currentDate };
    this.article = { ...this.sampleArticle };
  }

  private initArticle() {
    if (this.value) {
      this.article = { ...this.value };
    } else {
      this.article = { ...this.sampleArticle };
    }
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
