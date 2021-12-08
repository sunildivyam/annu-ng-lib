import { Component, Input, OnInit } from '@angular/core';
import { Route, Routes } from '@angular/router';

@Component({
  selector: 'anu-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
@Input() items: Routes;
@Input() heading: string;
@Input() opened: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  
  public toggleOpen(opened: boolean): void {
    this.opened = opened;
  }

  public itemCliked(route: Route): void {
    if (this.opened) {
      this.toggleOpen(false);
    }
  }
}
