import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../../common-ui/tabs';
import { CLASS_INFO_TABS, PROPERTY_TYPES } from '../docs.constants';
import { ClassInfo } from '../docs.interface';

@Component({
  selector: 'anu-class-info',
  templateUrl: './class-info.component.html',
  styleUrls: ['./class-info.component.scss']
})
export class ClassInfoComponent implements OnInit {
  @Input() classInfo: ClassInfo;

  tabs = CLASS_INFO_TABS.map(t => ({ ...t }));
  activeTab = this.tabs[0];
  propertyTypes: typeof PROPERTY_TYPES = PROPERTY_TYPES;
  loading: boolean = false;
  error: any;

  constructor() { }

  ngOnInit(): void {}

  public tabChanged(tab: Tab) {
    this.activeTab = tab;
  }

}
