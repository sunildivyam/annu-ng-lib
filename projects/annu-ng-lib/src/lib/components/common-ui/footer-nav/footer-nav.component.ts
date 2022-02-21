import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Routes } from '@angular/router';

@Component({
  selector: 'anu-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent implements OnInit {
@Input() copyrightText: string;
@Input() items: Routes = [];
@Output() selected = new EventEmitter<Route>();
  constructor() { }

  ngOnInit(): void {
  }

  public itemCliked(route: Route): void {
    this.selected.emit(route);
  }
}
