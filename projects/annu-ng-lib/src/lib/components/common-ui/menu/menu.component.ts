import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from './menu.interface';

@Component({
  selector: 'anu-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() items: Array<MenuItem> = [];
  @Input() heading: string = '';
  @Input() headingHref: Array<string> = [];
  @Input() subHeading: string = '';
  @Input() subHeadingHref: Array<string> = [];
  @Input() opened: boolean = false;
  @Output() selected = new EventEmitter<MenuItem>();
  @Output() openStatusChanged = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
  }

  public toggleOpen(opened: boolean): void {
    this.opened = opened;
    this.openStatusChanged.emit(this.opened);
  }

  public itemCliked(menuItem: MenuItem): void {
    this.selected.emit(menuItem);

    if (this.opened) {
      this.toggleOpen(false);
    }
  }
}
