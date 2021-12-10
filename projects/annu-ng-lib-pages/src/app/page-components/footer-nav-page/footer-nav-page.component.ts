import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'anu-footer-nav-page',
  templateUrl: './footer-nav-page.component.html',
  styleUrls: ['./footer-nav-page.component.scss']
})
export class FooterNavPageComponent implements OnInit {
  mainRoutes: Routes;

  constructor(private router: Router) {
    this.mainRoutes = this.router.config.filter(r => r.data?.type === 'main-navigation');
  }

  ngOnInit(): void {
  }

}
