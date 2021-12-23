import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../article';
import { EditorElement, EDITOR_ROOT_ELEMENT } from '../content-editor';
import { ImageInfo } from '../image-form';
import { Tab } from '../tabs';

@Component({
  selector: 'anu-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss']
})
export class ArticleEditorComponent implements OnInit {
  @Input() value: Article;
  @Output() changed = new EventEmitter<Article>();

  toggleImageForm: boolean = false;

  tabs: Array<Tab> = [{
    name: 'article',
    title: 'Article',
  } as Tab,
  {
    name: 'moreinfo',
    title: 'More Info',
  } as Tab];

  activeTab = this.tabs[0];
  article: Article = {
    name: '',
    body: EDITOR_ROOT_ELEMENT
  };

  constructor() { }

  private getNameFromTitle(title: string = ''): string {
    return title.split(' ').join('-').toLocaleLowerCase();
  }

  public get title() : string {
    return this.article?.body?.children[0]?.data?.text || '';
  }

  public get summary() : string {
    return this.article?.body?.children[1]?.data?.text || '';
  }

  ngOnInit(): void {
    this.article.name = this.getNameFromTitle(this.title);
  }

  public tabChanged(tab: Tab) {
    this.activeTab = tab;
  }

  public articleBodyChanged(body: EditorElement) {
    this.article.body = body;
    this.article.name = this.getNameFromTitle(this.title);
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
