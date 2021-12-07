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
      title: 'Tab 1'
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
  
  public selectedTab: Tab
  constructor() { 
    this.selectedTab = this.tabs.find(t => t.active === true);
  }

  ngOnInit(): void {
  }

  public tabChanged(tab: Tab): void {
    this.selectedTab = tab;
  }

}
