import { Component, Injector, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Article } from './article.interface';
import { UtilsService } from '../../../services/utils';

@Component({
  selector: 'anu-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnChanges {
  /**
   * Trims the description to the given character count and adds ... to the end of the text.
   */
  @Input() value: Article | null;
  /**
   * shows hyperlink to update page
   */
  @Input() updateHref: Array<string>;
  /**
   * shows hyperlink to readmore page
   */
  @Input() readMoreHref: Array<string>;
  /**
   * shows hyperlink to article full view page
   */
  @Input() titleHref: Array<string>;
  /**
   * if false, info like updated, created, published etc. will be hidden.
   */
  @Input() showMetaInfo: boolean = true;
  /**
   * Trims the description to the given character count and adds ... to the end of the text.
   */
  @Input() descriptionCharCount: number = 0;


  trimmedDescription: string = '';

  constructor(public utilsSvc: UtilsService, private injector: Injector) {
    this.value = this.injector.get('value', this.value || null);
    this.updateHref = this.injector.get('updateHref', this.updateHref);
    this.readMoreHref = this.injector.get('readMoreHref', this.readMoreHref);
    this.titleHref = this.injector.get('titleHref', this.titleHref);
    this.showMetaInfo = this.injector.get('showMetaInfo', this.showMetaInfo);
    this.descriptionCharCount = this.injector.get('descriptionCharCount', this.descriptionCharCount);
  }

  ngOnInit(): void {
    this.trimDescription();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.trimDescription();
  }

  private trimDescription() {
    const desc = this.value?.metaInfo?.description;

    if (this.descriptionCharCount && this.descriptionCharCount > 0) {
      this.trimmedDescription = this.utilsSvc.getTrimmedStringByChars(desc, this.descriptionCharCount);
    } else {
      this.trimmedDescription = desc;
    }
  }
}
