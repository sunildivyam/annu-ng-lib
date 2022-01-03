import { Component, OnInit } from '@angular/core';
import { MetaInfo } from '@annu-ng-lib';
import { SAMPLE_PAGE_META } from './config';

@Component({
  selector: 'anu-meta-page',
  templateUrl: './meta-page.component.html',
  styleUrls: ['./meta-page.component.scss']
})
export class MetaPageComponent implements OnInit {
  public pageMetaInfo: MetaInfo = { ...SAMPLE_PAGE_META };

  constructor() { }

  ngOnInit(): void {
  }

  public metaInfoChanged(metaInfo: MetaInfo): void {
    this.pageMetaInfo = metaInfo;
    console.log(this.pageMetaInfo);
  }
}
