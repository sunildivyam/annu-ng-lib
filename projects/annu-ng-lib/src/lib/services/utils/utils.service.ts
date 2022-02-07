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
   * Converts a string into dashed string. All spaces are replaced with dashes.
   * This converted string can be used for getting a unique name for a title of any content like, article etc.
   *
   * @param title
   * @returns
   */
  public toDashedString(title: string = ''): string {
    return title.split(' ').join('-').toLocaleLowerCase();
  }

}
