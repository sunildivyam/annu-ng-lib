import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tab } from '../../common-ui/tabs';
import { COMMPONENT_INFO_TABS, PROPERTY_TYPES } from '../docs.constants';
import { ComponentInfo } from '../docs.interface';

@Component({
  selector: 'anu-component-info',
  templateUrl: './component-info.component.html',
  styleUrls: ['./component-info.component.scss']
})
export class ComponentInfoComponent implements OnInit {
  @Input() componentInfo: ComponentInfo;

  tabs = COMMPONENT_INFO_TABS.map(t => ({ ...t }));
  activeTab = this.tabs[1];
  propertyTypes: typeof PROPERTY_TYPES = PROPERTY_TYPES;


  constructor() {}

  ngOnInit(): void {

  }

  public tabChanged(tab: Tab) {
    this.activeTab = tab;
  }

}
