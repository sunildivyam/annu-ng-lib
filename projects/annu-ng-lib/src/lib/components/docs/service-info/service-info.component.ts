import { Component, Injector, Input, OnInit } from '@angular/core';
import { ComponentMethod, ServiceInfo } from '../docs.interface';
import { PROPERTY_TYPES, SERVICE_INFO_TABS } from '../constants';
import { DocsService } from '../docs.service';
import { Tab } from '../../common-ui/tabs';
import { LibServices } from '../lib-resources/lib-services';


@Component({
  selector: 'anu-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.scss']
})
export class ServiceInfoComponent implements OnInit {
  @Input() name: string = '';

  svcInfo: ServiceInfo;
  tabs = SERVICE_INFO_TABS.map(t => ({ ...t }));
  activeTab = this.tabs[1];
  propertyTypes: typeof PROPERTY_TYPES = PROPERTY_TYPES;
  filteredMethods: Array<ComponentMethod> = [];
  searchKeys = ['name', 'description'];
  serviceInstance: any;
  methodParameters: Array<any> = [];
  methodResponses: Array<string> = [];
  methodErrors: Array<any> = [];
  loading: boolean = false;
  error: any;

  constructor(private docService: DocsService, private injector: Injector) { }

  ngOnInit(): void {
    // this.getServiceInfo();
  }

  ngOnChanges(): void {
    this.getServiceInfo();
  }

  private async getServiceInfo() {
    if (!this.name) return;
    this.loading = true;
    this.error = null;

    try {
      this.svcInfo = await this.docService.getServiceInfo(this.name)

      this.filteredMethods = this.svcInfo?.methods || [];
      // Set Service Instance
      if (this.svcInfo) {
        this.serviceInstance = this.injector.get<any>(LibServices[this.svcInfo.name]);
      } else {
        this.serviceInstance = null;
      }

      this.loading = false;
    } catch (error: any) {
      this.loading = false;
      this.error = error;
      this.serviceInstance = null;
    }
  }

  public tabChanged(tab: Tab) {
    this.activeTab = tab;
  }

  public onMethodSearch(filteredMethods: Array<ComponentMethod>): void {
    this.filteredMethods = filteredMethods;
  }

  public methodParametersChanged(params: Array<any>, method: ComponentMethod): void {
    this.methodParameters = params;

    const argValues = params.map(p => this.docService.parsePropValue(p, p.value));

    const returnOfFunction = this.serviceInstance[method.name](...argValues);
    if (method.returnType.includes('Observable')) {
      returnOfFunction.subscribe(res => {
        delete this.methodErrors[method.name];
        this.methodResponses[method.name] = JSON.stringify(res, null, '\t');
      })
        .catch(error => {
          this.methodErrors[method.name] = error;
          delete this.methodResponses[method.name];
        })
    } else if (method.returnType.includes('Promise')) {
      returnOfFunction.then(res => {
        delete this.methodErrors[method.name];
        this.methodResponses[method.name] = JSON.stringify(res, null, '\t');
      }, error => {
        this.methodErrors[method.name] = error;
        delete this.methodResponses[method.name];
      })
    } else {
      this.methodResponses[method.name] = JSON.stringify(returnOfFunction, null, '\t');
    }
  }

}
