import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../../common-ui/tabs';
import { DIRECTIVE_INFO_TABS, PROPERTY_TYPES } from '../docs.constants';
import { DirectiveInfo } from '../docs.interface';

@Component({
  selector: 'anu-directive-info',
  templateUrl: './directive-info.component.html',
  styleUrls: ['./directive-info.component.scss']
})
export class DirectiveInfoComponent implements OnInit {
  @Input() directiveInfo: DirectiveInfo;

  tabs = DIRECTIVE_INFO_TABS.map(t => ({ ...t }));
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
