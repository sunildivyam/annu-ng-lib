import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route } from '@angular/router';
import { NavItem } from '.';

@Component({
  selector: 'anu-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {
  @Input() items: Array<NavItem> = [];
  @Input() heading: string;

  @Output() changed = new EventEmitter<NavItem>();

  hamburgerOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public navClicked(event: any, item: NavItem) {
    if (!item.href) {
      event.preventDefault();
    }
    this.hamburgerOpened = false;
    this.changed.emit(item);
  }

  public hamburgerChanged(opened: boolean) {
    this.hamburgerOpened = opened;
  }
}
