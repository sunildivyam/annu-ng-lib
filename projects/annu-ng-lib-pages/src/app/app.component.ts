import { Component, OnInit } from '@angular/core';
import { AppConfig, MenuItem, ThemeService } from '@annu/ng-lib';
import { appConfig } from './constants';
import { mainRoutes } from './app.routes';

@Component({
  selector: 'anu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appConfig: AppConfig = appConfig;
  mainMenuItems: Array<MenuItem> = [];
  isMainNavOpen: boolean = false;

  constructor(private themeService: ThemeService) {
    this.mainMenuItems = mainRoutes.map(r => ({ title: r.data.title, href: [r.path] }));
  }

  ngOnInit(): void {
    this.themeService.setTheme(this.appConfig.themeName, false);
  }

  public loginStatusClicked(): void {
    this.isMainNavOpen = !this.isMainNavOpen;
  }

  public mainMenuOpenStatusChanged(opened: boolean): void {
    this.isMainNavOpen = opened;
  }
}
