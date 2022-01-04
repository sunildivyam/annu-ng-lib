import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NavItem, ThemeService } from '@annu-ng-lib';
import { ROUTE_TYPES } from './constants';
import { environment } from '../environments/environment';

@Component({
  selector: 'anu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'annu-ng-lib-pages';
  componentRoutes: Array<NavItem>;
  mainRoutes: Array<Route>;

  constructor(private router: Router, private themeService: ThemeService) {
    this.componentRoutes = this.mapRoutesToNavItems();
    this.mainRoutes = router.config.filter(r => r.data?.type === ROUTE_TYPES.main);
  }

  private sortNavItemsFn(a, b): number {
    return a.title < b.title ? -1: 1;
  }

  private mapRoutesToNavItems(): Array<NavItem> {
    const commonUi: Array<NavItem> = [];
    const docs: Array<NavItem> = [];
    const cms: Array<NavItem> = [];

    this.router.config.forEach((r: Route) => {
      const navItem: NavItem = {
        title: r.data?.title || '',
        href: r.path
      };

      if (r.data?.type === ROUTE_TYPES.components.commonUi) commonUi.push(navItem);
      if (r.data?.type === ROUTE_TYPES.components.docs) docs.push(navItem);
      if (r.data?.type === ROUTE_TYPES.components.cms) cms.push(navItem);
    });

    // Sort all Nav Items
    commonUi.sort(this.sortNavItemsFn);
    cms.sort(this.sortNavItemsFn);
    docs.sort(this.sortNavItemsFn);

    const separator: NavItem = { separator: true };

    return [].concat(
      [{ ...separator, title: ROUTE_TYPES.components.commonUi }], ...commonUi,
      [{ ...separator, title: ROUTE_TYPES.components.cms }], ...cms,
      [{ ...separator, title: ROUTE_TYPES.components.docs }], ...docs);
  }

  ngOnInit(): void {
    this.themeService.setTheme(environment.themeName, false);
  }
}
