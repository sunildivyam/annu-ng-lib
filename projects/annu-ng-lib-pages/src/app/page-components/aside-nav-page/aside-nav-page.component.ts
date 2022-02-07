import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { NavItem } from '@annu-ng-lib';
import { commonUiRoutes } from '../../app.routes';

@Component({
  selector: 'anu-aside-nav-page',
  templateUrl: './aside-nav-page.component.html',
  styleUrls: ['./aside-nav-page.component.scss']
})
export class AsideNavPageComponent implements OnInit {
  navItems: Array<NavItem> = [];

  constructor(private router: Router) {
    this.navItems = commonUiRoutes.map((r: Route) => ({ title: r.data.title, href: r.path } as NavItem));
  }

  ngOnInit(): void {
  }

  public navClicked(route: Route): void {

  }
}
