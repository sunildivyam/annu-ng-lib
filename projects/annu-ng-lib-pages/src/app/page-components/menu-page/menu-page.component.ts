import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'anu-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {
  routes: Routes;

  constructor(private router: Router) {     
    this.routes = this.router.config.filter(r => r.data?.type === 'main-navigation');
  }

  ngOnInit(): void {
  }

}
