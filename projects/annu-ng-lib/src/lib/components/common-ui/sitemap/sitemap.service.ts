import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, combineLatestWith, throwError } from 'rxjs';
import { LibConfig } from '../../../app-config/app-config.interface';
import { SITEMAP_JSON_FILE, SITEMAP_XML_FILE } from './sitemap.constants';
import { Sitemap, SitemapItem, SitemapResponse } from './sitemap.interface';
import { xml2json, json2xml } from 'xml-js';
import { Buffer } from 'buffer';
import { UtilsService } from '../../../services/utils/utils.service';

@Injectable()
export class SitemapService {
  private xmlUrl: string = '';
  private xmlJsonUrl: string = '';

  constructor(private libConfig: LibConfig,
    private utilsSvc: UtilsService,
    private httpClient: HttpClient) {
    if (typeof window !== undefined) {
      (window as any).Buffer = (window as any).Buffer || Buffer;
    }
    this.xmlUrl = `${this.libConfig.apiBaseUrl}/${SITEMAP_XML_FILE}`;
    this.xmlJsonUrl = `${this.libConfig.apiBaseUrl}/${SITEMAP_JSON_FILE}`;
  }


  /**
   * Reads the sitemap xml and sitemap info json.
   * @date 2/21/2023 - 11:35:49 PM
   *
   * @public
   * @async
   * @returns {Promise<SitemapResponse>}
   */
  public async getSitemapResponse(): Promise<SitemapResponse> {
    return new Promise((resolve, reject) => {
      const xmlObserver$ = this.httpClient.get(this.xmlUrl, { observe: 'body', responseType: 'text' });
      const xmlJsonObserver$ = this.httpClient.get<any>(this.xmlJsonUrl, { responseType: 'json' });

      xmlObserver$.pipe(combineLatestWith(xmlJsonObserver$), catchError((error: any) => {
        reject(error);

        return throwError(() => {
          return error;
        });
      }))
        .subscribe(([sitemapStr, sitemapInfo]) => {
          const sitemap = this.xmlToJsonSitemap(sitemapStr);

          const sitemapResponse: SitemapResponse = {
            sitemapInfo,
            sitemap
          };
          resolve(sitemapResponse);
        });
    });
  }


  /**
   * Appends Urls to existing sitemap json.
   * @date 2/22/2023 - 1:35:03 AM
   *
   * @public
   * @param {Array<SitemapItem>} urls
   * @param {Sitemap} sitemap
   * @returns {Sitemap}
   */
  public addUrlsToSitemapJson(urls: Array<SitemapItem>, sitemap: Sitemap): Sitemap {
    const newSitemap: Sitemap = this.utilsSvc.deepCopy(sitemap);

    if (!urls || !urls.length) {
      return newSitemap;
    }

    const clonedUrls: Array<SitemapItem> = urls.map(url => this.utilsSvc.deepCopy(url));

    clonedUrls.forEach(url => {
      // check if url exist in sitemap
      const index = newSitemap.urlset.url.findIndex(u => u.loc._text === url.loc._text);
      if (index >= 0) {
        url.status = false;
        newSitemap.urlset.url.splice(index, 1);
      } else {
        url.status = true;
      }
    });

    newSitemap.urlset.url = [].concat(newSitemap.urlset.url, clonedUrls);

    return newSitemap;
  }


  /**
   * Converts json sitemap to xml sitemap string.
   * @date 2/22/2023 - 1:37:41 AM
   *
   * @public
   * @param {Sitemap} sitemap
   * @returns {string}
   */
  public jsonToXmlSitemap(sitemap: Sitemap): string {
    const sitemapStr = JSON.stringify(sitemap);
    const sitemapXmlStr = json2xml(sitemapStr, { compact: true });

    return sitemapXmlStr;
  }

  /**
   * Converts xml sitemap to json sitemap.
   * @date 2/22/2023 - 1:37:41 AM
   *
   * @public
   * @param {xmlStr} string
   * @returns {Sitemap}
   */
  public xmlToJsonSitemap(xmlStr: string = ''): Sitemap {
    //Unescaping \" to " so as to parse xml.
    const newStr = xmlStr.replaceAll('\\"', '"');
    const jsonStr = xml2json(newStr, { compact: true });
    const sitemap = JSON.parse(jsonStr);

    return sitemap;
  }

}
