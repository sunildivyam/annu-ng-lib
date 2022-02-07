import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anu-hamburger-page',
  templateUrl: './hamburger-page.component.html',
  styleUrls: ['./hamburger-page.component.scss']
})
export class HamburgerPageComponent implements OnInit {

  public opened = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggled(event: any) {
    // todo
  }
}
