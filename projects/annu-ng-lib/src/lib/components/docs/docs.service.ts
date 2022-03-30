import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LibConfig } from '../../app-config/app-config.interface';
import { ACCESS_MODIFIERS } from './constants';
import { ComponentProp, ComponentInfo, ComponentMethod, ServiceInfo, LibDocsInfo } from './docs.interface';

@Injectable()
export class DocsService {
  url: string;
  libDocsCache: LibDocsInfo = {};

  constructor(private httpClient: HttpClient, private libConfig: LibConfig) {
    this.url = this.libConfig?.docsJsonUrl || '';
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

  private parseServiceInfo(rawSvcInfo: any = {}): ServiceInfo {
    return {
      name: rawSvcInfo.name || '',
      description: rawSvcInfo.description || '',
      tsUrl: rawSvcInfo.file || '',
      tsSource: rawSvcInfo.sourceCode || '',
      inputProps: rawSvcInfo.inputsClass && rawSvcInfo.inputsClass.map(p => this.parseProp(p)) || [],
      outputProps: rawSvcInfo.outputsClass && rawSvcInfo.outputsClass.map(p => this.parseProp(p)) || [],
      props: rawSvcInfo.properties && rawSvcInfo.properties.map(p => this.parseProp(p)) || [],
      methods: rawSvcInfo.methods && rawSvcInfo.methods.map(m => this.parseMethod(m)) || [],
    } as ServiceInfo;
  }


  private stripSingleQuotedStr(str: string): string {
    if (!str) return str;

    if ((str.startsWith("'") && str.endsWith("'")) || (str.startsWith('\"') && str.endsWith('\"'))) {
      str = str.substring(1);
      str = str.substring(0, str.length - 1);
    }

    return str;
  }

  private replaceSingleWithDoubleQuotes(str): string {
    if (!str) return str;
    str = str.replace(/'/g, '"');

    return str;
  }

  public parsePropValue(prop: ComponentProp, value: any): any {
    let paramValue;
    try {
      switch (prop.type) {
        case 'string':
          paramValue = value === 'null' ? null : value;
          break;
        case 'number':
          paramValue = parseInt(value);
          break;
        case 'boolean':
          paramValue = value === 'null' ? null : value === 'false' ? false : Boolean(value);
          break;
        default:
          paramValue = value === 'null' ? null : JSON.parse(value);
      }
    } catch (error: any) {
      paramValue = this.replaceSingleWithDoubleQuotes(value);
      try {
        paramValue = paramValue === 'null' ? null : JSON.parse(paramValue);
      } catch (error: any) {
        paramValue = value;
      }
    }

    return paramValue;
  }

  public parsePropValueToStr(prop: ComponentProp, value: any): any {
    let paramValue;
    try {
      switch (prop.type) {
        case 'string':
          paramValue = value === null ? 'null' : this.stripSingleQuotedStr(value);
          break;
        case 'number':
          paramValue = value;
          break;
        case 'boolean':
          paramValue = value === 'null' ? null : value === 'false' ? false : value;
          break;
        default:
          paramValue = value === null ? 'null' : JSON.stringify(value, null, '\t');
          paramValue = this.stripSingleQuotedStr(paramValue);
      }
    } catch (error: any) {
      paramValue = value;
    }

    return paramValue;
  }

  /**
   * Gets docs info for all available resources in the library.
   * @date 23/3/2022 - 1:25:35 pm
   *
   * @public
   * @async
   * @returns {Promise<LibDocsInfo>}
   */
  public async getLibDocsInfo(): Promise<LibDocsInfo> {
    return new Promise((resolve, reject) => {

      this.httpClient.get<any>(this.url)
        .pipe(catchError(
          (errorResponse: any) => {
            this.libDocsCache.services = [];
            this.libDocsCache.components = [];
            console.log('STATUS', errorResponse.status);
            let errorMsg: string;
            if (errorResponse.error instanceof HttpErrorResponse) {
              errorMsg = errorResponse.error.message;
            } else {
              errorMsg = errorResponse.message
            }
            const error = { code: errorResponse.status || errorResponse?.error?.code || errorResponse?.code || 'UNKNOWN', message: errorMsg || 'Something went wrong' }
            reject(error);

            return throwError(() => {
              return error;
            });
          }
        ))
        .subscribe(docsResponse => {
          this.libDocsCache.services = docsResponse.injectables.map(svc => this.parseServiceInfo(svc)) || [];
          this.libDocsCache.components = docsResponse.components.map(cmp => this.parseComponentInfo(cmp)) || [];

          resolve({ ...this.libDocsCache });
        })
    })
  }


  /**
  * getComponentInfo() method fetches all the Components from docs json,
  * parses and filters them and returns the Component Info for the specipfied component name.
  *
  * @public
  * @param {string} name Name of the service to retrive information
  * @returns {Promise<ComponentInfo>}
  */
  public async getComponentInfo(name: string): Promise<ComponentInfo> {
    let cmpInfo;

    if (!name) {
      throw new Error('Component Name is Empty or Invalid');
    }

    if (this.libDocsCache.components && this.libDocsCache.components.length) {
      cmpInfo = this.libDocsCache.components.find(c => c.name === name);
    }


    if (cmpInfo) {
      return { ...cmpInfo };
    } else {
      try {
        await this.getLibDocsInfo();
        if (this.libDocsCache.components && this.libDocsCache.components.length) {
          cmpInfo = this.libDocsCache.components.find(c => c.name === name);
        }

        if (cmpInfo) {
          return { ...cmpInfo };
        } else {
          throw new Error('Component not found - ' + name);
        }
      } catch (error: any) {
        throw error;
      }
    }
  }

  /**
    * getServiceInfo() method fetches all the Services from docs json,
    * parses and filters them and returns the Service Info for the specipfied component name.
    *
    * @public
    * @param {string} name Name of the service to retrive information
    * @returns {Promise<ServiceInfo>}
    */
  public async getServiceInfo(name: string): Promise<ServiceInfo> {
    if (!name) {
      throw new Error('Service Name is Empty or Invalid');
    }

    const svcInfo = this.libDocsCache.services && this.libDocsCache.services.length && this.libDocsCache.services.find(s => s.name === name);

    if (svcInfo) {
      return { ...svcInfo };
    } else {
      try {
        await this.getLibDocsInfo();
        const svcInfoFound = this.libDocsCache.services && this.libDocsCache.services.length && this.libDocsCache.services.find(s => s.name === name);
        if (svcInfoFound) {
          return { ...svcInfoFound };
        } else {
          throw new Error('Service not found - ' + name);
        }
      } catch (error: any) {
        throw error;
      }
    }
  }

  /**
  * getAllComponents() method fetches all the Components from docs json.
  *
  * @public
  * @returns {Promise<Array<ComponentInfo>>}
  */
  public async getAllComponents(): Promise<Array<ComponentInfo>> {
    const allComponents = this.libDocsCache.components || [];

    if (allComponents && allComponents.length) {
      return [...allComponents];
    } else {
      await this.getLibDocsInfo();
      const allComponentsFound = this.libDocsCache.components || [];

      return [...allComponentsFound];
    }
  }

  /**
  * getAllServices() method fetches all the Services from docs json.
  *
  * @public
  * @returns {Promise<Array<ServiceInfo>>}
  */
  public async getAllServices(): Promise<Array<ServiceInfo>> {
    const allServices = this.libDocsCache.services || [];

    if (allServices && allServices.length) {
      return [...allServices];
    } else {
      await this.getLibDocsInfo();
      const allServicesFound = this.libDocsCache.services || [];

      return [...allServicesFound];
    }
  }

}
