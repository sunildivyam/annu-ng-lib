import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ThemeService } from '@annu-ng-lib';
import { ROUTE_TYPES } from './constants';

@Component({
  selector: 'anu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'annu-ng-lib-pages';
  componentRoutes: Array<Route>;
  mainRoutes: Array<Route>;

  constructor(private router: Router, private themeService: ThemeService) {
    this.componentRoutes = router.config.filter(r => r.data?.type === ROUTE_TYPES.components);
    this.mainRoutes = router.config.filter(r => r.data?.type === ROUTE_TYPES.main);
  }

  ngOnInit(): void {
    this.themeService.setTheme('pureGold', false);
  }
}
