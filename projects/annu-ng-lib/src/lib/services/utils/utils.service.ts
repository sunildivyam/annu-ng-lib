import { Injectable } from '@angular/core';


/**
 * UtilsService exports all the methods that provides some common utility.
 *
 * @export
 * @class UtilsService
 * @typedef {UtilsService}
 */
@Injectable({
  providedIn: 'root'
})
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
   * Converts a string into dashed string. All spaces are replaced with dashes.
   * This converted string can be used for getting a unique name for a title of any content like, article etc.
   *
   * @param title
   * @returns
   */
  public toDashedString(title: string = ''): string {
    return title.split(' ').join('-').toLocaleLowerCase();
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
}
