import { Component, Input, OnInit } from '@angular/core';
import { Article } from './article.interface';

@Component({
  selector: 'anu-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() value: Article = { name: 'default-article' };

  constructor() { }

  ngOnInit(): void {
  }

}
