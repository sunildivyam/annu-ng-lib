import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BASE64_AUTH } from '../../../images';
import { AuthFirebaseService } from '../../../firebase';

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

  user: any;
  loading: boolean = false;
  userIcon: string = BASE64_AUTH.user;

  constructor(private authFireSvc: AuthFirebaseService, private router: Router) {
    this.authFireSvc.authStateChanged().subscribe(u => {
      this.user = u;
    });
  }

  ngOnInit(): void {
    this.user = this.authFireSvc.getCurrentUser();
  }

  private async logout(): Promise<void> {
    this.loading = true;
    await this.authFireSvc.logout();
    this.loading = false;
    this.router.navigate([this.loggedOutPageUrl])
  }
  public logoutClicked(event: any) {
    event.preventDefault();
    this.logout();
  }
}
