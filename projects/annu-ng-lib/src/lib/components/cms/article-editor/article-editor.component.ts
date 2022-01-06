import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Article } from '../article';
import { EditorElement, EDITOR_ROOT_ELEMENT } from '../content-editor';
import { ImageInfo, MetaInfo, Tab } from '../../common-ui';
import { ARTICLE_EDITOR_TABS } from './constants';
import { UtilsService } from '../../../services';

@Component({
  selector: 'anu-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss']
})
export class ArticleEditorComponent implements OnInit, OnChanges {
  @Input() value: Article;
  @Output() changed = new EventEmitter<Article>();

  toggleImageForm: boolean = false;
  tabs: Array<Tab> = ARTICLE_EDITOR_TABS.map(t => ({ ...t }));

  activeTab = this.tabs[0];
  article: Article = {
    name: '',
    body: EDITOR_ROOT_ELEMENT,
    metaInfo: {}
  };

  constructor(private utils: UtilsService) { }

  private updateArticleAdditionalInfo() {
    // set article name
    this.article.name = this.utils.toDashedString(this.title);
    // set article meta info based on content
    this.article.metaInfo = { ...this.article.metaInfo, title: this.title };
  }

  public get title(): string {
    return this.article?.body?.children[0]?.data?.text || '';
  }

  public get summary(): string {
    return this.article?.body?.children[1]?.data?.text || '';
  }

  ngOnInit(): void {
    this.updateArticleAdditionalInfo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateArticleAdditionalInfo();
  }

  public tabChanged(tab: Tab) {
    this.activeTab = tab;
  }

  public articleBodyChanged(body: EditorElement) {
    this.article.body = body;
    this.updateArticleAdditionalInfo();

    this.changed.emit(this.article);
  }

  public articleMetaChanged(metaInfo: MetaInfo) {
    this.article.metaInfo = metaInfo;
    this.changed.emit(this.article);
  }

  public changeImage(event: any) {
    event.preventDefault();
    this.toggleImageForm = !this.toggleImageForm;
  }

  public cancelImageChange() {
    this.toggleImageForm = !this.toggleImageForm;
  }

  public saveImageChange(image: ImageInfo) {
    this.article.image = image;
    this.toggleImageForm = !this.toggleImageForm;
    this.changed.emit(this.article);
  }
}
