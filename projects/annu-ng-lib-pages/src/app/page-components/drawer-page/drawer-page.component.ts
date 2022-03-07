import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anu-drawer-page',
  templateUrl: './drawer-page.component.html',
  styleUrls: ['./drawer-page.component.scss']
})
export class DrawerPageComponent implements OnInit {
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
