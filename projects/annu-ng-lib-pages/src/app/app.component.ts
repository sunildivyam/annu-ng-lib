import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { AppConfig, MenuItem, NavItem, ThemeService } from '@annu/ng-lib';
import { ROUTE_TYPES, appConfig } from './constants';
import { commonUiRoutes, mainRoutes, cmsRoutes, docsRoutes, authRoutes } from './app.routes';
import { DocsService } from '@annu/ng-lib/components/docs/docs.service';

@Component({
  selector: 'anu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appConfig: AppConfig = appConfig;
  componentsNavItems: Array<NavItem>;
  servicesNavItems: Array<NavItem>;
  mainMenuItems: Array<MenuItem>;
  isMainNavOpen: boolean = false;

  constructor(private router: Router, private themeService: ThemeService, private docsService: DocsService) {
    this.componentsNavItems = [].concat(
      this.mapRoutesToNavItems(commonUiRoutes, ROUTE_TYPES.components.commonUi),
      this.mapRoutesToNavItems(cmsRoutes, ROUTE_TYPES.components.cms),
      this.mapRoutesToNavItems(docsRoutes, ROUTE_TYPES.components.docs),
      this.mapRoutesToNavItems(authRoutes, ROUTE_TYPES.components.auth),
    );

    this.mainMenuItems = mainRoutes.map(r => ({ title: r.data.title, href: [r.path] }));
  }

  private async getAllLibServices() {
    try {
    const svcs = await this.docsService.getAllServices();
    this.servicesNavItems = svcs.map(svc => ({ title: svc.name, href: `./services/${svc.name}` }))
    } catch(error: any) {
      this.servicesNavItems = [];
    }
  }

  private sortNavItemsFn(a, b): number {
    return a.title < b.title ? -1 : 1;
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
    this.themeService.setTheme(this.appConfig.themeName, false);
    this.getAllLibServices();
  }

  public loginStatusClicked(): void {
    this.isMainNavOpen = !this.isMainNavOpen;
  }

  public mainMenuOpenStatusChanged(opened: boolean): void {
    this.isMainNavOpen = opened;
  }
}
