import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Routes } from '@angular/router';

@Component({
  selector: 'anu-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {
@Input() items: Routes = [];
@Input() heading: string;

@Output() changed = new EventEmitter<Route>();

hamburgerOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public navClicked(event: any, route: Route) {
    this.hamburgerOpened = false;
    this.changed.emit(route);
  }

  public hamburgerChanged(opened: boolean) {
    this.hamburgerOpened = opened;
  }
}
