import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthFirebaseUiService, AuthFirebaseService } from '../../../firebase';

/**
 * Login Component uses firebaseui config and signInMethods from LibConfig, that is provided to annu-ng-lib.module,
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
  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<any> = new EventEmitter<any>();
  @Output() onUiShown: EventEmitter<void> = new EventEmitter<void>();

  firebaseUiElementId: string = 'firebaseui-provider-root' + (new Date()).getUTCMilliseconds(); // unique id
  isLoggedIn: boolean = false;
  successCb: Function;
  errorCb: Function;
  uiShownCb: Function;
  error: any;

  constructor(private authFireUiSvc: AuthFirebaseUiService, private authFireSvc: AuthFirebaseService) {
    this.successCb = (user) => {
      // todo: use the user info, if needed.
      this.onSuccess.emit(user);
    };

    this.errorCb = (error) => {
      // show error on the UI.
      this.error = error;
      this.onError.emit(error);
    };

    this.uiShownCb = () => {
      // todo: hide loader or anything like that, as UI is shown.
      this.onUiShown.emit();
    };

    this.authFireSvc.authStateChanged().subscribe( () => {
      this.isLoggedIn = this.authFireSvc.isLoggedIn();
      this.error = null;

      if (!this.isLoggedIn) {
        this.showfirebaseUi();
      }
    });
  }

  public showfirebaseUi(): void {
  this.authFireUiSvc.startAuthUI(`#${this.firebaseUiElementId}`, this.successCb , this.errorCb, this.uiShownCb);
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authFireSvc.isLoggedIn();
    this.showfirebaseUi();
  }
}
