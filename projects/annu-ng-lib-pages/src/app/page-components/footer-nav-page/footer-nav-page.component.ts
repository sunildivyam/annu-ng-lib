import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@annu/ng-lib';
import { mainRoutes } from '../../app.routes';

@Component({
  selector: 'anu-footer-nav-page',
  templateUrl: './footer-nav-page.component.html',
  styleUrls: ['./footer-nav-page.component.scss']
})
export class FooterNavPageComponent implements OnInit {
  menuItems: Array<MenuItem>;

  constructor() {
    this.menuItems = mainRoutes.map(r => ({title: r.data.title, href: [r.path]}));
  }

  ngOnInit(): void {
  }

}
