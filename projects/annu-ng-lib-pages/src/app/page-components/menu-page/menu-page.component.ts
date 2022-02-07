import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { mainRoutes } from '../../app.routes';

@Component({
  selector: 'anu-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {
  routes: Routes;

  constructor(private router: Router) {
    this.routes = mainRoutes
  }

  ngOnInit(): void {
  }

}
