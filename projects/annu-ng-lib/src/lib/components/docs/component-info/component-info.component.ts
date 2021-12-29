import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tab } from '@annu-ng-lib';
import { COMMPONENT_INFO_TABS, PROPERTY_TYPES } from '../constants';
import { ComponentInfo } from '../docs.interface';
import { DocsService } from '../docs.service';

@Component({
  selector: 'anu-component-info',
  templateUrl: './component-info.component.html',
  styleUrls: ['./component-info.component.scss']
})
export class ComponentInfoComponent implements OnInit, OnChanges {
  @Input() name: string = '';

  cmpInfo: ComponentInfo;
  tabs = COMMPONENT_INFO_TABS;
  activeTab = COMMPONENT_INFO_TABS[0];
  propertyTypes: typeof PROPERTY_TYPES = PROPERTY_TYPES;

  constructor(private docService: DocsService) { }

  ngOnInit(): void {
    this.getComponentInfo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getComponentInfo();
  }

  private getComponentInfo() {
    this.docService.getComponentInfo(this.name).subscribe((cmpInfo: ComponentInfo) => this.cmpInfo = cmpInfo);
  }

  public tabChanged(tab: Tab) {
    this.activeTab = tab;
  }
}
