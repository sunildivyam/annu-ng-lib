import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@annu/ng-lib';
import { mainRoutes } from '../../app.routes';

@Component({
  selector: 'anu-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {
  menuItems: Array<MenuItem>;

  constructor() {
    this.menuItems = mainRoutes.map(r => ({title: r.data.title, href: [r.path]}));
  }

  ngOnInit(): void {
  }

}
