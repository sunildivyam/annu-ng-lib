import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DRAWER_OVERLAYS } from '.';
import { DRAWER_POSITIONS } from './drawer.constants';

@Component({
  selector: 'anu-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  /**
   * Property open shows or hides the drawer based on value true/false;
   */
  @Input() open: boolean = false;

  /**
   * position shows the drawer top/right/bottom/left from the relative parent or from the screen based on DRAWER_POSITIONS values.
   */
  @Input() position: string = DRAWER_POSITIONS.LEFT;

  /**
   * Allowed values are from DRAWER_OVERLAYS, shows drawer relative to parent, window, push content.
   */
  @Input() overlay: string = DRAWER_OVERLAYS.PUSH_CONTENT;


  @HostBinding('class.drawer-open') get isOpenMethod() { return this.open; }
  @HostBinding('class') get isPositionMethod() {
    let classNames = '';
    if (this.position) classNames += 'drawer-' + this.position + ' ';
    if (this.overlay) classNames += 'drawer-' + this.overlay + ' ';
    return classNames;
  }


  constructor() { }

  ngOnInit(): void {

  }

}
