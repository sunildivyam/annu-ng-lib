import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from '../../../firebase';

@Component({
  selector: 'anu-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.scss']
})
export class LoginStatusComponent implements OnInit {
  user: any;

  constructor(private authFireSvc: AuthFirebaseService) {

  }

  ngOnInit(): void {
  }

}
