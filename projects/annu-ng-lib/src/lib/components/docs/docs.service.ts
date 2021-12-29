import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { LibConfig } from '../../annu-ng-lib.interface';
import { ACCESS_MODIFIERS } from './constants';
import { ComponentProp, ComponentInfo, ComponentMethod } from './docs.interface';

@Injectable({
  providedIn: 'root'
})
export class DocsService {
  url: string;
  componentsCache: Object = {};

  constructor(private httpClient: HttpClient, private libConfig: LibConfig) {
    this.url = libConfig?.docsConfig?.docsJsonUrl || '';
  }

  private parseProp(cmpProp: any): ComponentProp {
    return {
      name: cmpProp.name || '',
      type: cmpProp.type || '',
      defaultValue: cmpProp.defaultValue || '',
      deprecated: cmpProp.deprecated || '',
      deprecationMessage: cmpProp.deprecationMessage || '',
      description: cmpProp.description || '',
      accessModifier: cmpProp.modifierKind && ACCESS_MODIFIERS[cmpProp.modifierKind[0]] || '',
    } as ComponentProp;
  }

  private parseMethod(cmpMethod: any): ComponentMethod {
    return {
      name: cmpMethod.name || '',
      returnType: cmpMethod.returnType || '',
      args: cmpMethod.args || [],
      deprecated: cmpMethod.deprecated || '',
      deprecationMessage: cmpMethod.deprecationMessage || '',
      description: cmpMethod.description || '',
      accessModifier: ACCESS_MODIFIERS[cmpMethod.modifierKind],
    } as ComponentMethod;
  }

  private parseComponentInfo(rawCmpInfo: any = {}): ComponentInfo {
    return {
      name: rawCmpInfo.name || '',
      description: rawCmpInfo.description || '',
      selector: rawCmpInfo.selector || '',
      styleUrl: rawCmpInfo.styleUrlsData && rawCmpInfo.styleUrlsData[0].styleUrl || '',
      styleSource: rawCmpInfo.styleUrlsData && rawCmpInfo.styleUrlsData[0].data || '',
      templateUrl: rawCmpInfo.templateUrl && rawCmpInfo.templateUrl[0] || '',
      templateSource: rawCmpInfo.templateData || '',
      tsUrl: rawCmpInfo.file || '',
      tsSource: rawCmpInfo.sourceCode || '',
      inputProps: rawCmpInfo.inputsClass && rawCmpInfo.inputsClass.map(p => this.parseProp(p)) || [],
      outputProps: rawCmpInfo.outputsClass && rawCmpInfo.outputsClass.map(p => this.parseProp(p)) || [],
      props: rawCmpInfo.propertiesClass && rawCmpInfo.propertiesClass.map(p => this.parseProp(p)) || [],
      methods: rawCmpInfo.methodsClass && rawCmpInfo.methodsClass.map(m => this.parseMethod(m)) || [],
    } as ComponentInfo;
  }

  public getComponentInfo(name: string): Observable<Object> {
    return new Observable(observer => {
      const cmpInfo = this.componentsCache[name];
      if (cmpInfo) {
        observer.next(cmpInfo);
      } else {
        this.httpClient.get(this.url).subscribe((res: any) => {
          const cmp = res.components.find(c => c.name === name);
          this.componentsCache[name] = this.parseComponentInfo(cmp);
          observer.next(this.componentsCache[name]);
        })
      }
    })
  }
}
