import { Component, OnInit } from '@angular/core';
import { AppConfig } from '@annu/ng-lib';
import { appConfig } from '../../constants';

@Component({
  selector: 'anu-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {
  appConfig: AppConfig = appConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
