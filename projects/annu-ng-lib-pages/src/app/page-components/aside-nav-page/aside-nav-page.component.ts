import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { ROUTE_TYPES } from '../../constants';

@Component({
  selector: 'anu-aside-nav-page',
  templateUrl: './aside-nav-page.component.html',
  styleUrls: ['./aside-nav-page.component.scss']
})
export class AsideNavPageComponent implements OnInit {
componentRoutes: Routes = [];
  constructor(private router: Router) { 
    this.componentRoutes = this.router.config.filter(r => r.data?.type === ROUTE_TYPES.components);
  }

  ngOnInit(): void {
  }

  public navClicked(route: Route): void {

  }
}
