import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { META_PROPS } from './constants';
import { MetaInfo, MetaProp, MetaPropertyType } from './meta.interface';

@Injectable()
export class MetaService {

  constructor(private meta: Meta, private title: Title) { }

  private getTagAsString(metaDefinition: MetaDefinition): string {
    let keyName = '';
    if (metaDefinition.property) {
      keyName = 'property';
    } else if (metaDefinition.httpEquiv) {
      keyName = 'http-equiv';
    } else {
      keyName = 'name';
    }

    return `<meta ${keyName}="${metaDefinition[keyName === 'http-equiv' ? 'httpEquiv' : keyName]}" content="${metaDefinition.content}">`;
  }

  private generateAllMetaDefinitions(pageMeta: MetaInfo = {}): Array<MetaDefinition> {
    const metaDefinitions: Array<MetaDefinition> = [];
    const metaProps = META_PROPS.map(p => ({ ...p }));

    metaProps.forEach((p: MetaProp) => {
      const content = pageMeta[p.name];
      if (content){
        p.types.forEach((t: MetaPropertyType) => {
          const metaDefinition: MetaDefinition = {};
          metaDefinition[t.type] = t.subType ? `${t.subType}:${p.name}` : p.name;
          metaDefinition.content = content;
          metaDefinitions.push(metaDefinition);
        })
      }
    });

    return metaDefinitions;
  }

  public getTagsAsString(pageMeta: MetaInfo): Array<string> {
    const metaDefinitions = this.generateAllMetaDefinitions(pageMeta);

    return metaDefinitions.map(m => this.getTagAsString(m));
  }

  public setPageMeta(pageMeta: MetaInfo): Array<HTMLMetaElement> {
    const metaDefinitions = this.generateAllMetaDefinitions(pageMeta);
    this.title.setTitle(pageMeta?.title);
    return this.meta.addTags(metaDefinitions);
  }
}
