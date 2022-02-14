import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authFireSvc: AuthFirebaseService, private router: Router) {
    this.authFireSvc.authStateChanged().subscribe(u => {
      this.user = u;
      console.log(u);
    });
  }

  ngOnInit(): void {
  }

  private async logout(): Promise<void> {
    await this.authFireSvc.logout();
    this.router.navigate([this.loggedOutPageUrl])
  }
  public logoutClicked(event: any) {
    event.preventDefault();
    this.logout();
  }
}
