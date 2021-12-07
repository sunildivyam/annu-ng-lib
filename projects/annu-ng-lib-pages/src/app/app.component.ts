import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ThemeService } from '@annu-ng-lib';

@Component({
  selector: 'anu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'annu-ng-lib-pages';
  routes: Array<Route>;

  constructor(private router: Router, private themeService: ThemeService) {
    this.routes = router.config;
    this.themeService.setTheme('pureGold', false);
  }
}
