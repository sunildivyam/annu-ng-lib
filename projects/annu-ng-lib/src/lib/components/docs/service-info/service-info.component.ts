import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../../common-ui';
import { ServiceInfo } from '..';
import { DocsService } from '../docs.service';
import { PROPERTY_TYPES, SERVICE_INFO_TABS } from '../constants';

@Component({
  selector: 'anu-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.scss']
})
export class ServiceInfoComponent implements OnInit {
  @Input() name: string = '';

  svcInfo: ServiceInfo;
  tabs = SERVICE_INFO_TABS.map(t => ({...t}));
  activeTab = this.tabs[0];
  propertyTypes: typeof PROPERTY_TYPES = PROPERTY_TYPES;

  constructor(private docService: DocsService) { }

  ngOnInit(): void {
    this.getServiceInfo();
  }

  ngOnChanges(): void {
    this.getServiceInfo();
  }

  private getServiceInfo() {
    this.docService.getServiceInfo(this.name).subscribe((svcInfo: ServiceInfo) => {
      this.svcInfo = svcInfo;
      console.log(this.svcInfo);
    });
  }

  public tabChanged(tab: Tab) {
    this.activeTab = tab;
  }
}
