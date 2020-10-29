import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'anu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'annu-ng-lib-pages';
  routes: Array<Route>;

  constructor(private router: Router) {
    this.routes = router.config;
  }
}
