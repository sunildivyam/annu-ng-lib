import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { mainRoutes } from '../../app.routes';

@Component({
  selector: 'anu-footer-nav-page',
  templateUrl: './footer-nav-page.component.html',
  styleUrls: ['./footer-nav-page.component.scss']
})
export class FooterNavPageComponent implements OnInit {
  mainRoutes: Routes;

  constructor(private router: Router) {
    this.mainRoutes = mainRoutes;
  }

  ngOnInit(): void {
  }

}
