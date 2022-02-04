import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes, RouterLink } from '@angular/router';
import { NavItem, ThemeService } from '@annu-ng-lib';
import { ROUTE_TYPES } from './constants';
import { environment } from '../environments/environment';
import { commonUiRoutes, mainRoutes, cmsRoutes, docsRoutes } from './app.routes';

@Component({
  selector: 'anu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'annu-ng-lib-pages';
  componentsNavItems: Array<NavItem>;
  mainRoutes: Array<Route>;

  constructor(private router: Router, private themeService: ThemeService) {
    this.componentsNavItems = [].concat(
      this.mapRoutesToNavItems(commonUiRoutes, ROUTE_TYPES.components.commonUi),
      this.mapRoutesToNavItems(cmsRoutes, ROUTE_TYPES.components.cms),
      this.mapRoutesToNavItems(docsRoutes, ROUTE_TYPES.components.docs),
      );
    this.mainRoutes = mainRoutes;
  }

  private sortNavItemsFn(a, b): number {
    return a.title < b.title ? -1: 1;
  }


  private mapRoutesToNavItems(routes: Routes, title: string): Array<NavItem> {
    const navItems: Array<NavItem> = [];

    routes.forEach((r: Route) => {
      const navItem: NavItem = {
        title: r.data?.title || '',
        href: r.path
      };

      navItems.push(navItem);
    });

    // Sort all Nav Items
    navItems.sort(this.sortNavItemsFn);

    const separator: NavItem = { separator: true };

    return [].concat([{ ...separator, title }], ...navItems,);
  }

  ngOnInit(): void {
    this.themeService.setTheme(environment.themeName, false);
  }
}
