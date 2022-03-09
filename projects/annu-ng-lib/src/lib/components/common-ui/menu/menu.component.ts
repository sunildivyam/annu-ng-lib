import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Routes } from '@angular/router';

@Component({
  selector: 'anu-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
@Input() items: Routes;
@Input() heading: string;
@Input() subHeading: string;
@Input() opened: boolean;
@Output() selected = new EventEmitter<Route>();
@Output() openStatusChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public toggleOpen(opened: boolean): void {
    this.opened = opened;
    this.openStatusChanged.emit(this.opened);
  }

  public itemCliked(route: Route): void {
    this.selected.emit(route);

    if (this.opened) {
      this.toggleOpen(false);
    }
  }
}
