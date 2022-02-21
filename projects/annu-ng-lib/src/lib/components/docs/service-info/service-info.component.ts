import { Component, Injector, Input, OnInit } from '@angular/core';
import { Tab } from '../../common-ui';
import { ComponentMethod, ServiceInfo } from '..';
import { PROPERTY_TYPES, SERVICE_INFO_TABS } from '../constants';

import { DocsService } from '../docs.service';
import { UtilsService } from '../../../services';
import { ContentEditorService } from '../../cms/content-editor/services/content-editor.service';
import { HighlightService } from '../../common-ui/code-block/highlight.service';
import { SelectionService } from '../../cms/content-editor/services/selection.service';
import { MetaService } from '../../common-ui/meta';
import { ThemeService } from '../../common-ui/theme';
import { ArticlesFirebaseService, AuthFirebaseService } from '../../../firebase';

const LibServices = {
  UtilsService,
  ContentEditorService,
  DocsService,
  HighlightService,
  MetaService,
  SelectionService,
  ThemeService,
  ArticlesFirebaseService,
  AuthFirebaseService,
};


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

  constructor(private docService: DocsService, private injector: Injector) { }

  ngOnInit(): void {
    this.getServiceInfo();
  }

  ngOnChanges(): void {
    this.getServiceInfo();
  }

  private getServiceInfo() {
    this.docService.getServiceInfo(this.name).subscribe((svcInfo: ServiceInfo) => {
      this.svcInfo = svcInfo;
      this.filteredMethods = this.svcInfo?.methods;
      // Set Service Instance
      this.serviceInstance = this.injector.get<any>(LibServices[this.svcInfo.name]);
    });
  }

  public tabChanged(tab: Tab) {
    this.activeTab = tab;
  }

  public onMethodSearch(filteredMethods: Array<ComponentMethod>): void {
    this.filteredMethods = filteredMethods;
  }

  public methodParametersChanged(params: Array<any>, method: ComponentMethod): void {
    this.methodParameters = params;

    const argValues = params.map(p => {
      let paramValue;
      try {
        switch (p.type) {
          case 'string':
            paramValue = p.value === 'null' ? null : p.value;
            break;
          case 'number':
            paramValue = parseInt(p.value);
            break;
          case 'boolean':
            paramValue = p.value === 'null' ? null : p.value === 'false' ? false : true;
            break;
          default:
            paramValue = p.value === 'null' ? null : JSON.parse(p.value);
        }
      } catch (error: any) {
        paramValue = p.value;
      }

      return paramValue;
    });

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
