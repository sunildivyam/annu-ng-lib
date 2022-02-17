import { Component, OnInit } from '@angular/core';
import { AuthFirebaseUiService } from '@annu-ng-lib';

@Component({
  selector: 'anu-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authFireUiSvc: AuthFirebaseUiService) { }

  ngOnInit(): void {
    this.authFireUiSvc.startAuthUI('#login-providers');
  }

}
