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
      enabled: true
    } as Tab,
    {
      name: 'tab2',
      title: 'Tab 2',
      enabled: true
    } as Tab,
    {
      name: 'tab3',
      title: 'Tab 3',
      enabled: true
    } as Tab
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  public tabChanged(tab): void {
    console.log('selected Tab', tab);
  }

}
