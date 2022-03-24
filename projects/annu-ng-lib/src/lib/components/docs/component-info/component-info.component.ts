import { Component, Injector, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tab } from '../../common-ui/tabs';
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
  tabs = COMMPONENT_INFO_TABS.map(t => ({ ...t }));
  activeTab = this.tabs[1];
  propertyTypes: typeof PROPERTY_TYPES = PROPERTY_TYPES;


  constructor(private docService: DocsService, public injector: Injector) {
    this.name = this.injector.get('name', '');
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name']?.currentValue !== changes['name']?.previousValue) {
      this.getComponentInfo();
    }
  }

  private async getComponentInfo() {
    try {
      this.cmpInfo = await this.docService.getComponentInfo(this.name);
    } catch (error: any) {
      this.cmpInfo = null;
    }
  }

  public tabChanged(tab: Tab) {
    this.activeTab = tab;
  }

}
