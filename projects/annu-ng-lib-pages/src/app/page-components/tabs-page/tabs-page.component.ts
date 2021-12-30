import { Component, OnInit } from '@angular/core';
import { Tab } from '@annu-ng-lib';

@Component({
  selector: 'anu-tabs-page',
  templateUrl: './tabs-page.component.html',
  styleUrls: ['./tabs-page.component.scss']
})
export class TabsPageComponent implements OnInit {
  public tabs = [
    {
      name: 'tab1',
      title: 'Tab 1',
      active: true
    } as Tab,
    {
      name: 'tab2',
      title: 'Tab 2',
      active: true
    } as Tab,
    {
      name: 'tab3',
      title: 'Tab 3'
    } as Tab
  ];

  public selectedTab: Tab = this.tabs[0];

  constructor() {}

  ngOnInit(): void {
  }

  public tabChanged(tab: Tab): void {
    this.selectedTab = tab;
  }

}
