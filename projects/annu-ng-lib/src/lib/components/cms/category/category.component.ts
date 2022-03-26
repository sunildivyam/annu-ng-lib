import { Component, EventEmitter, Injector, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UtilsService } from '../../../services/utils';
import { Category } from './category.interface';

@Component({
  selector: 'anu-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnChanges {
  /**
   * Trims the description to the given character count and adds ... to the end of the text.
   */
   @Input() value: Category | null;
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
    this.value = this.injector.get('value', this.value);
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
