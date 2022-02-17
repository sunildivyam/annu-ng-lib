import { Component, Input, OnInit } from '@angular/core';
import { signInMethodInfo } from '../login.constants';
import { BASE64_SOCIAL_MEDIA } from '../../../../images';
import { LibConfig } from '../../../../annu-ng-lib.interface';


/**
 * Login Component uses signInMethods from LibConfig, that is provided to annu-ng-lib.module,
 * from the consumer application.
 *
 * @export
 * @class LoginGenericComponent
 * @typedef {LoginGenericComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'anu-login-generic',
  templateUrl: './login-generic.component.html',
  styleUrls: ['./login-generic.component.scss']
})
export class LoginGenericComponent implements OnInit {

  signInMethods: Array<string> = [];
  signInMethodInfo = { ...signInMethodInfo };
  base64Images = { ...BASE64_SOCIAL_MEDIA };

  constructor(private libConfig: LibConfig) {
    this.signInMethods = this.libConfig?.firebaseui?.signInOptions || [];
  }

  ngOnInit(): void {
  }

}
