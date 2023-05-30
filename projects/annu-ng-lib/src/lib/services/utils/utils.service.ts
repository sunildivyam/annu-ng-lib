import { Injectable } from '@angular/core';
import { FirebaseStoreConfig } from '../../firebase/firebase.interface';
import { LibConfig } from '../../app-config/app-config.interface';
import { ImageFileInfo } from '../../components/common-ui/image-browser/image-browser.interface';


/**
 * UtilsService exports all the methods that provides some common utility.
 *
 * @export
 * @class UtilsService
 * @typedef {UtilsService}
 */
@Injectable()
export class UtilsService {

  constructor() { }

  /**
   * Returns the current Date from browser in the ISO format.
   *
   * @public
   * @readonly
   * @type {string}
   */
  public get currentDate(): string {
    return (new Date()).toISOString();
  }


  /**
   * Returns a local date string
   * @date 26/2/2022 - 9:48:21 am
   *
   * @public
   * @param {string} date
   * @returns {string}
   */
  public dateToLocalString(date: string = ''): string {
    if (!date) return '';
    const options: any = { year: 'numeric', month: 'short', day: 'numeric' };
    const dt = new Date(date);
    return dt.toLocaleDateString('en-US', options);
  }


  /**
   * Converts ISOString date string to its equivalent time in milliseconds since 1970, returns numeric value as a string.
   * @date 12/28/2022 - 6:04:39 PM
   *
   * @public
   * @param {string} dateStr
   * @returns {string}
   */
  public dateStringToTotalTimeString(dateStr: string): string {
    let timeStr = '';

    try {
      if (dateStr) {
        const dt = new Date(dateStr);
        timeStr = dt.getTime().toString();
      }
    } catch (err) { }

    return timeStr;
  }

  /**
   * Converts total time in milliseconds since 1970 (numbered string) to its equivalent ISOString date string.
   * @date 12/28/2022 - 6:04:39 PM
   *
   * @public
   * @param {string} timeStr
   * @returns {string}
   */
  public totalTimeStringToUTCdateString(timeStr: string): string {
    let dateStr = '';

    try {
      if (timeStr) {
        dateStr = new Date(Number(timeStr)).toISOString();
      }
    } catch (err) { }

    return dateStr;
  }


  /**
   * Stripe out all special characters from the string too except A-Z, a-z, 0-9.
   * @date 2/12/2023 - 2:01:20 PM
   *
   * @public
   * @param {string} str
   * @returns {string}
   */
  public getStringWithNoSpecialChars(str: string): string {
    if (!str) return '';
    const strArr = str.split('');
    const filteredStr = strArr.filter(char => {
      if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9') || char === ' ') {
        return true;
      } else {
        return false;
      }
    });

    return filteredStr.join('');
  }


  /**
   * Trims out additional consecutive spaces from a string, also trims spaces from end of the string.
   * @date 2/12/2023 - 9:54:48 PM
   *
   * @public
   * @param {string} str
   * @returns {string}
   */
  public trimConsecutiveSpaces(str: string): string {
    if (!str) return '';

    return str.split('').filter((char, index) => {
      if (char === ' ') {
        if (index === (str.length - 1)) {
          return false;
        } else if (str[index + 1] === ' ') {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    }).join('');
  }

  /**
   * Converts a string into dashed string. All spaces are replaced with dashes.
   * This converted string can be used for getting a unique name for a title of any content like, article etc.
   *
   * @param title
   * @returns
   */
  public toDashedString(title: string = ''): string {
    // trims additional spaces from a string.
    const spacesTrimmedStr = this.trimConsecutiveSpaces(title);
    // Stripe out all special characters from the string too except A-Z, a-z, 0-9.
    const titleWithNoSpecialChars = this.getStringWithNoSpecialChars(spacesTrimmedStr);
    return titleWithNoSpecialChars.split(' ').join('-').toLocaleLowerCase();
  }


  /**
   * Scrolls the page to the desired top position.
   * @date 25/2/2022 - 5:28:11 pm
   *
   * @public
   * @param {number} top
   */
  public scrollTo(top: number = 0) {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: top });
    }
  }

  public getTrimmedStringByChars(str: string, count: number = 0): string {
    if (!str || typeof str !== 'string' || !count || count <= 0) {
      return str;
    }

    return str.substring(0, count) + '...';
  }


  /**
   * Generates a unique ID from a string by adding dashes for spaces and adding a unique string.
   * @date 14/4/2022 - 2:39:05 pm
   *
   * @public
   * @param {string} [str='']
   * @returns {string}
   */
  public getUniqueFromString(str: string = ''): string {
    const dashed = this.toDashedString(str);
    const rndStr = Math.random().toString(36).substring(2);
    const uniqueId = Date.now().toString(36) + rndStr.substring(rndStr.length / 3);

    return `${dashed}-${uniqueId}`;
  }


  /**
   * Generates a message for an image upload, based on image specifications.
   * @date 2/4/2023 - 2:57:11 PM
   *
   * @public
   * @param {FirebaseStoreConfig} imageSpecs
   * @returns {string}
   */
  public getImageSpecsString(imageSpecs: FirebaseStoreConfig): string {
    const { minWidth, minHeight, maxWidth, maxHeight, maxKBs } = imageSpecs;

    return `Allowed Image specification: 1Kb <= size <= ${maxKBs}Kbs | ${minWidth}px <= width <= ${maxWidth}px | ${minHeight}px <= height <= ${maxHeight}px`;
  }


  /**
   * Deep copy an object or an array
   * @date 2/28/2023 - 3:22:38 AM
   *
   * @public
   * @param {(any)} value
   * @returns {(any)}
   */
  public deepCopy(value: any): any {
    try {
      return JSON.parse(JSON.stringify(value));
    } catch (err) {
      return null;
    }
  }

  public delay(miliseconds: number): Promise<unknown> {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
  }

  public getImageUrl(libConfig: LibConfig, imageFullPath: string): string {
    return `${libConfig.imagesSourceUrl}${imageFullPath}`;
  }

  public getCanonicalUrl(libConfig: LibConfig, categoryid: string, articleId: string): string {
    return `${libConfig.apiBaseUrl}/${categoryid}/${articleId}`;
  }
}
