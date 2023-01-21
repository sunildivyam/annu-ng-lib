import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirestoreParserService {

  constructor() { }

  private getFireStoreProp(value: any): string | undefined {
    const props: Array<string> = [
      'arrayValue',
      'bytesValue',
      'booleanValue',
      'doubleValue',
      'geoPointValue',
      'integerValue',
      'mapValue',
      'nullValue',
      'referenceValue',
      'stringValue',
      'timestampValue',
      'fields',
      'document'
    ];
    return Object.keys(value).find(k => props.includes(k));
  }

  public parse(value: any) {
    // Remove readTime
    if (value instanceof Array) {
      if (value.length === 1 && typeof value[0] === 'object' && Object.keys(value[0]).includes('readTime') && Object.keys(value[0]).length === 1) {
        value.splice(0, 1);
      }
    }

    if (typeof value === 'object') {
      const objKeys = Object.keys(value);
      if (objKeys.includes('readTime')) delete value.readTime;
    }


    const prop = this.getFireStoreProp(value);

    if (prop === 'doubleValue' || prop === 'integerValue') {
      value = Number(value[prop]);
    }
    else if (prop === 'arrayValue') {
      value = (value[prop] && value[prop].values || []).map((v: any) => this.parse(v))
    }
    else if (prop === 'mapValue') {
      value = this.parse(value[prop] && value[prop].fields || {})
    }
    else if (prop === 'geoPointValue') {
      value = { latitude: 0, longitude: 0, ...value[prop] }
    }
    // extract and add id to the document.
    else if (prop === 'fields') {
      const nextValue = value[prop];
      const docName: string = value.name;
      if (docName && nextValue) {
        const docId = docName.substring(docName.lastIndexOf('/') + 1);
        value[prop].id = docId;
      }
      value = this.parse(value[prop])
    }
    else if (prop === 'document') {
      const nextValue = value[prop];
      const docName: string = nextValue.name;
      if (docName && nextValue.fields) {
        const docId = docName.substring(docName.lastIndexOf('/') + 1);
        value[prop].fields.id = docId;
      }
      value = this.parse(value[prop])
    }
    else if (prop) {
      value = value[prop]
    }
    else if (typeof value === 'object') {
      Object.keys(value).forEach(k => value[k] = this.parse(value[k]))
    }

    return value;
  }
}
