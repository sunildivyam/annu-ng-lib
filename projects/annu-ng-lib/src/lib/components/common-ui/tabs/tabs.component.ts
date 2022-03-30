import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Tab } from './tabs.interface';

@Component({
  selector: 'anu-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnChanges {
  @Input() tabs: Array<Tab> = [];
  @Input() activeTab: Tab = null;
  @Input() rounded: boolean = false;
  @Input() spaced: boolean = false;
  @Input() vertical: boolean = false;
  @Input() secondary: boolean = false;
  @Input() fullWidth: boolean = false;

  @Output() changed = new EventEmitter<Tab>();

  constructor() {}

  private setActiveTab(selectedTab: Tab) {
    this.tabs.forEach(tab => {
      if (selectedTab && tab.name === selectedTab.name) {
        tab.active = true;
        this.changed.emit(tab);
      } else {
        tab.active = false;
      }
    })
  }

  ngOnInit(): void {
    this.setActiveTab(this.activeTab);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setActiveTab(this.activeTab);
  }

  public tabClicked(event: any, selectedTab: Tab): void {
    event.preventDefault();
    this.setActiveTab(selectedTab);
  }
}
