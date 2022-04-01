import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../../common-ui/tabs';
import { GUARD_INFO_TABS, PROPERTY_TYPES } from '../docs.constants';
import { GuardInfo } from '../docs.interface';

@Component({
  selector: 'anu-guard-info',
  templateUrl: './guard-info.component.html',
  styleUrls: ['./guard-info.component.scss']
})
export class GuardInfoComponent implements OnInit {
  @Input() guardInfo: GuardInfo;

  tabs = GUARD_INFO_TABS.map(t => ({ ...t }));
  activeTab = this.tabs[0];
  propertyTypes: typeof PROPERTY_TYPES = PROPERTY_TYPES;
  loading: boolean = false;
  error: any;

  constructor() {}

  ngOnInit(): void {}

  public tabChanged(tab: Tab) {
    this.activeTab = tab;
  }

}
