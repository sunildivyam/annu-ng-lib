import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tab } from './tabs.interface';

@Component({
  selector: 'anu-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tabs: Array<Tab>;
  @Input() activeTab: Tab;
  @Input() rounded: boolean = false;
  @Input() spaced: boolean = false;
  @Input() vertical: boolean = false;
  @Output() tabChanged = new EventEmitter<Tab>();

  constructor() {
    this.tabs = []
  }

  private setActiveTab(selectedTab: Tab) {
    if (!selectedTab) return;

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
    this.setActiveTab(this.activeTab);
  }

  public tabClicked(event: any, selectedTab: Tab): void {
    event.preventDefault();
    this.setActiveTab(selectedTab);
  }
}
