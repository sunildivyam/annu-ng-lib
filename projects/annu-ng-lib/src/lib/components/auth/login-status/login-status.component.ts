import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BASE64_AUTH } from '../../../images';
import { AuthFirebaseService } from '../../../firebase/auth/auth-firebase.service';

@Component({
  selector: 'anu-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.scss']
})
export class LoginStatusComponent implements OnInit {
  @Input() loginPageUrl: string = '';
  @Input() profilePageUrl: string = '';
  @Input() loggedOutPageUrl: string = '';
  @Input() theme: string = '';

  @Output() signInClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() signOutClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() profileClicked: EventEmitter<void> = new EventEmitter<void>();

  user: any;
  loading: boolean = false;
  userIcon: string = BASE64_AUTH.user;

  constructor(private authFireSvc: AuthFirebaseService, private router: Router, private injector: Injector) {
    this.loginPageUrl = this.injector.get('loginPageUrl', this.loginPageUrl);
    this.profilePageUrl = this.injector.get('profilePageUrl', this.profilePageUrl);
    this.loggedOutPageUrl = this.injector.get('loggedOutPageUrl', this.loggedOutPageUrl);
    this.theme = this.injector.get('theme', this.theme);

    this.authFireSvc.authStateChanged().subscribe(u => {
      this.user = u;
    });
  }

  ngOnInit(): void {
    this.user = this.authFireSvc.getCurrentUser();
  }

  private async logout(): Promise<void> {
    this.loading = true;
    try {
    await this.authFireSvc.logout();
    } catch(error: any) {
      console.log(error)
      this.loading = false;
    }
    this.loading = false;
    this.router.navigate([this.loggedOutPageUrl])
  }

  public loggedInProfileClicked(event: any) {
    this.profileClicked.emit();
  }

  public loginClicked(event: any) {
    this.signInClicked.emit();
  }

  public logoutClicked(event: any) {
    event.preventDefault();
    this.signOutClicked.emit();
    this.logout();
  }
}
