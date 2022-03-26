import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
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

  constructor(private injector: Injector) {
    this.items = this.injector.get('items', this.items);
    this.heading = this.injector.get('heading', this.heading);
    this.headingHref = this.injector.get('headingHref', this.headingHref);
    this.subHeading = this.injector.get('subHeading', this.subHeading);
    this.subHeadingHref = this.injector.get('subHeadingHref', this.subHeadingHref);
    this.opened = this.injector.get('opened', this.opened);
    this.selected = this.injector.get('selected', this.selected);
    this.openStatusChanged = this.injector.get('openStatusChanged', this.openStatusChanged);
  }

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
