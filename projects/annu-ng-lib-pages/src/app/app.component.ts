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
  mainRoutes: Array<Route>;

  constructor(private router: Router, private themeService: ThemeService) {
    this.routes = router.config.filter(r => r.data?.type !== 'main-navigation');
    this.mainRoutes = router.config.filter(r => r.data?.type === 'main-navigation');
    this.themeService.setTheme('pureGold', false);
  }
}
