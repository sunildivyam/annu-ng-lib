import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tab } from './tabs.interface';

@Component({
  selector: 'anu-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tabs: Array<Tab>;
  @Output() tabChanged = new EventEmitter<Tab>();

  constructor() {
    this.tabs = []
  }

  private setActiveTab(selectedTab: Tab) {
    this.tabs.forEach(tab => {
      if (tab.name === selectedTab.name) {
        tab.active = true;
        this.tabChanged.emit(tab);
      } else {
        tab.active = false;
      }
    })
  }

  ngOnInit(): void {
  }

  public tabClicked(event: any, selectedTab: Tab): void {
    event.preventDefault();
    this.setActiveTab(selectedTab);
  }
}
