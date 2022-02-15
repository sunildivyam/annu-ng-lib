import { Component, Input, OnInit } from '@angular/core';
import { signInMethodInfo } from './login.constants';
import { BASE64_SOCIAL_MEDIA } from '../../../images';
import { LibConfig } from '../../../annu-ng-lib.interface';
import { DomSanitizer } from '@angular/platform-browser';


/**
 * Login Component uses signInMethods from LibConfig, that is provided to annu-ng-lib.module,
 * from the consumer application.
 *
 * @export
 * @class LoginComponent
 * @typedef {LoginComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'anu-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInMethods: Array<string> = [];
  signInMethodInfo = { ...signInMethodInfo };
  base64Images = { ...BASE64_SOCIAL_MEDIA };

  constructor(private libConfig: LibConfig, private domSanitizer: DomSanitizer) {
    this.signInMethods = this.libConfig.signInMethods;
  }

  ngOnInit(): void {
  }

}
