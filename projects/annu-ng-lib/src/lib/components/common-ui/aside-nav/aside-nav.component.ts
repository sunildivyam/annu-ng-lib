import { Component, EventEmitter, Input, OnInit, Output, QueryList, ContentChildren } from '@angular/core';
import { Route } from '@angular/router';
import { NavItem } from '.';

@Component({
  selector: 'anu-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {
  @ContentChildren('anu-aside-nav-item') navItems: QueryList<HTMLElement>;

  @Input() items: Array<NavItem> | null;
  @Input() heading: string;

  @Output() changed = new EventEmitter<NavItem>();

  hamburgerOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.navItems);
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
