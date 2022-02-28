import { Component, Input, OnInit } from '@angular/core';
import { Article } from './article.interface';
import { UtilsService } from '../../../services';

@Component({
  selector: 'anu-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() value: Article | null;
  @Input() updateHref: Array<string>;     // shows hyperlink to update page
  @Input() readMoreHref: Array<string>;   // shows hyperlink to readmore page
  @Input() titleHref: Array<string>;      // shows hyperlink to article full view page
  @Input() showMetaInfo: boolean = true;  // if false, info like updated, created, published etc. will be hidden.

  constructor(public utilsSvc: UtilsService) { }

  ngOnInit(): void {}
}
