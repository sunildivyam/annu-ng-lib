import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { AppConfig, ComponentInfo, MenuItem, NavItem, ThemeService, ServiceInfo, DocsService } from '@annu/ng-lib';
import { ROUTE_TYPES, appConfig, DOCS_NAVS } from './constants';
import { commonUiRoutes, mainRoutes, cmsRoutes, docsRoutes, authRoutes } from './app.routes';

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

  componentsNavItemsNew: Array<NavItem>;

  docsNavs: Array<any> = [...DOCS_NAVS];
  libNavOpened: boolean = true;

  constructor(private themeService: ThemeService, private docsService: DocsService) {
    this.componentsNavItems = [].concat(
      this.mapRoutesToNavItems(commonUiRoutes, ROUTE_TYPES.components.commonUi),
      this.mapRoutesToNavItems(cmsRoutes, ROUTE_TYPES.components.cms),
      this.mapRoutesToNavItems(docsRoutes, ROUTE_TYPES.components.docs),
      this.mapRoutesToNavItems(authRoutes, ROUTE_TYPES.components.auth),
    );

    this.mainMenuItems = mainRoutes.map(r => ({ title: r.data.title, href: [r.path] }));
  }

  private getNavsByType(primaryType: string, docInfo: Array<ServiceInfo | ComponentInfo>): Array<NavItem> {
    let pDocsNavs = [...this.docsNavs];

    pDocsNavs = pDocsNavs.map(docNav => {
      if (docNav.id === primaryType) {
        docNav.subNav = docNav.subNav.map(secNav => {
          const id = secNav.id;
          const navItems: Array<NavItem> = [];

          docInfo.forEach((docInfo: ServiceInfo) => {
            if (docInfo.tsUrl.indexOf(id) >= 0) {
              navItems.push({
                title: docInfo.name,
                href: `./${primaryType}/${docInfo.name}`
              })
            }
          })

          secNav.subNav = [...navItems];

          return secNav;
        })
      }

      return docNav;
    })


    return pDocsNavs;
  }

  private async getAllLibServices() {
    try {
      const svcs = await this.docsService.getAllServices();
      this.docsNavs = this.getNavsByType('services', svcs);
      // this.servicesNavItems = svcs.map(svc => ({ title: svc.name, href: `./services/${svc.name}` }))
    } catch (error: any) {
      this.servicesNavItems = [];
    }
  }

  private async getAllLibComponents() {
    try {
      const cmps = await this.docsService.getAllComponents();
      this.docsNavs = this.getNavsByType('components', cmps);
      // this.componentsNavItemsNew = cmps.map(cmp => ({ title: cmp.name, href: `./components-doc/${cmp.name}` }))
    } catch (error: any) {
      this.componentsNavItemsNew = [];
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
    this.getAllLibComponents();
  }

  public loginStatusClicked(): void {
    this.isMainNavOpen = !this.isMainNavOpen;
  }

  public mainMenuOpenStatusChanged(opened: boolean): void {
    this.isMainNavOpen = opened;
  }

  public libNavChanged(opened: boolean) {
    this.libNavOpened = opened;
  }
}
