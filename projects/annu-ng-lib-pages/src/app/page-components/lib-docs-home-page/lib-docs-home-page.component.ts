import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router, Routes } from '@angular/router';
import { AppConfig, ComponentInfo, MenuItem, NavItem, ThemeService, ServiceInfo, DocsService, MetaService, LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS, LibDocsHomeViewRouteData } from '@annu/ng-lib';
import { ROUTE_TYPES, appConfig, DOCS_NAVS } from '../../constants';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'anu-lib-docs-home-page',
  templateUrl: './lib-docs-home-page.component.html',
  styleUrls: ['./lib-docs-home-page.component.scss']
})
export class LibDocsHomePageComponent implements OnInit {

  appConfig: AppConfig = appConfig;
  docsNavs: Array<any> = [...DOCS_NAVS];
  error: any;
  libNavOpened: boolean = true;

  routeEndEvent: Subscription;

  constructor(public route: ActivatedRoute, private router: Router, private metaService: MetaService) {
    this.routeEndEvent = this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe(() => {
      console.log('HOME VIEW - NAVIGATION-END: FILLING DATA TO VIEW - STARTING')
      const homeViewData = { ...this.route.snapshot.data[LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS.LIB_DOCS_HOME_VIEW] } as LibDocsHomeViewRouteData || {};
      if (!homeViewData.libDocsInfoError) {
      this.docsNavs = this.getNavsByType('components', homeViewData.libDocsInfo?.components || []);
      this.docsNavs = this.getNavsByType('services', homeViewData.libDocsInfo?.services || []);
      // this.docsNavs = this.getNavsByType('interfaces', homeViewData.libDocsInfo.interfaces);
      // this.docsNavs = this.getNavsByType('guards', homeViewData.libDocsInfo.guards);
      }
      this.error = homeViewData?.libDocsInfoError;
      console.log('HOME VIEW - NAVIGATION-END: FILLING DATA TO VIEW - ENDED')
    })
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
                href: docInfo.name
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


  ngOnInit(): void {
  }

  public libNavChanged(opened: boolean) {
    this.libNavOpened = opened;
  }
}
