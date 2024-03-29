import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'firebase/auth';
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

  isLoggedIn: boolean = false;
  successCb: Function;
  errorCb: Function;
  uiShownCb: Function;
  error: any;

  constructor(
    private authFireUiSvc: AuthFirebaseUiService,
    private authFireSvc: AuthFirebaseService,
    private el: ElementRef) {
    this.successCb = (user, returnUrl) => {
      // todo: use the user info, if needed.
      this.onSuccess.emit({ user, returnUrl });
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
  }

  public showfirebaseUi(): void {
    const loginUiRootEl = this.el.nativeElement.querySelector('.login-ui-root');
    !this.isLoggedIn && loginUiRootEl && this.authFireUiSvc.startAuthUI(loginUiRootEl, this.successCb, this.errorCb, this.uiShownCb);
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authFireSvc.isLoggedIn();
    this.showfirebaseUi();

    this.authFireSvc.authStateChanged().subscribe((user: User) => {
      this.error = null;
      this.isLoggedIn = !!user?.uid;
      this.showfirebaseUi();
    });
  }
}
