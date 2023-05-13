import { Inject, Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { META_PROPS } from './constants';
import { MetaInfo, MetaProp, MetaPropertyType } from './meta.interface';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class MetaService {

  constructor(private meta: Meta, private title: Title,
    @Inject(DOCUMENT) private document: Document) { }

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
      if (content) {
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

  private removeExistingMetaTags(): void {
    const metaProps = META_PROPS.map(p => ({ ...p }));
    // remove canonical link tag
    this.removeCanonicalLinkTag();

    //remove all other meta tags
    metaProps.forEach((p: MetaProp) => {
      p.types.forEach((t: MetaPropertyType) => {
        const attrValue = t.subType ? `${t.subType}:${p.name}` : p.name;
        const attr = `${t.type === 'httpEquiv' ? 'http-equiv' : t.type }="${attrValue}"`;
        this.meta.removeTag(attr);
      })
    });
  }

  public getTagsAsString(pageMeta: MetaInfo): Array<string> {
    const metaDefinitions = this.generateAllMetaDefinitions(pageMeta);

    const tagsAsString: Array<string> = metaDefinitions.map(m => this.getTagAsString(m));
    if(pageMeta.url) {
      tagsAsString.push(`<link rel="canonical" href="${pageMeta.url}"/>`);
    }

    return tagsAsString;
  }

  public setPageMeta(pageMeta: MetaInfo): Array<HTMLMetaElement> {
    const metaDefinitions = this.generateAllMetaDefinitions(pageMeta);
    const addedMetaElements: Array<HTMLMetaElement> = [];
    // remove all existing meta tags, before adding new ones.
    this.removeExistingMetaTags();

    // sets title
    this.title.setTitle(pageMeta?.title);

    // sets canonical url link tag
    this.setCanonicalLinkTag(pageMeta);

    // sets all other meta tags.
    for (let metaDef of metaDefinitions) {
      addedMetaElements.push(this.meta.addTag(metaDef, false));
    }

    return addedMetaElements;
  }

  public setCanonicalLinkTag(metaInfo: MetaInfo): void {
    if (metaInfo.url) {
      const linkEl = this.document.createElement('link');
      linkEl.setAttribute('rel', 'canonical');
      linkEl.setAttribute('href', metaInfo.url);
      this.document.head.appendChild(linkEl);
    }
  }

  public getCanonicalLinkTags(): NodeListOf<Element> {
    const canonicalLinks = this.document.head.querySelectorAll('link[rel="canonical"]');
    return canonicalLinks;
  }

  public removeCanonicalLinkTag(): void {
    const canonicalLinks = this.getCanonicalLinkTags();
    if (canonicalLinks && canonicalLinks.length) {
      canonicalLinks.forEach(link => this.document.head.removeChild(link));
    }
  }
}
