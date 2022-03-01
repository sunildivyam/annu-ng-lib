import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'anu-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  @Input() value: Article | null = null;
  @Input() showMetaInfo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
