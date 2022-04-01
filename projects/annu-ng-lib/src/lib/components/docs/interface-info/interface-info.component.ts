import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../../common-ui/tabs';
import { INTERFACE_INFO_TABS, PROPERTY_TYPES } from '../docs.constants';
import { InterfaceInfo } from '../docs.interface';

@Component({
  selector: 'anu-interface-info',
  templateUrl: './interface-info.component.html',
  styleUrls: ['./interface-info.component.scss']
})
export class InterfaceInfoComponent implements OnInit {
  @Input() interfaceInfo: InterfaceInfo;

  tabs = INTERFACE_INFO_TABS.map(t => ({ ...t }));
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
