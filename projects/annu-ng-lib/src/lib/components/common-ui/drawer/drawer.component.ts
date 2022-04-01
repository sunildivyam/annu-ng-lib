import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DRAWER_OVERLAYS } from '.';
import { DRAWER_POSITIONS } from './drawer.constants';


/**
 * CSS classes based drawer component. Show the drawer using below CSS classes:</br>
 * <table><tr><th>CSS Class Name</th><th>Description</th></tr>
 * <tr><td><code>.drawer-content-pushed</code></br><small>Postfixes: -sm/-md/-lg.</small></td><td>pushes surrounding content, when visible.</td></tr>
 * <tr><td><code>.drawer-relative</code></br><small>Postfixes: -sm/-md/-lg.</small></td><td>overlays over its relative parent, when visible.</td></tr>
 * <tr><td><code>.drawer-window</code></br><small>Postfixes: -sm/-md/-lg.</small></td><td>overlays over browser window, when visible.</td></tr>
 * <tr><td><code>.drawer-top</code></br><small>Postfixes: -sm/-md/-lg.</small></td><td>Shows at top of its relative parent or window.</td></tr>
 * <tr><td><code>.drawer-right</code></br><small>Postfixes: -sm/-md/-lg.</small></td><td>Shows at right of its relative parent or window.</td></tr>
 * <tr><td><code>.drawer-bottom</code></br><small>Postfixes: -sm/-md/-lg.</small></td><td>Shows at bottom of its relative parent or window.</td></tr>
 * <tr><td><code>.drawer-left</code></br><small>Postfixes: -sm/-md/-lg.</small></td><td>Shows at left of its relative parent or window.</td></tr>
 * </table>
 * @date 7/3/2022 - 5:16:02 pm
 *
 * @export
 * @class DrawerComponent
 * @typedef {DrawerComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'anu-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  /**
   * Property opened shows or hides the drawer based on value true/false;
   */
  @Input() opened: boolean = false;

  /**
   * position shows the drawer top/right/bottom/left from the relative parent or from the screen based on drawer overlay class names.
   */
  @Input() positionClassNames: Array<string> = ['drawer-left'];

  /**
   * Shows drawer relative to parent, window, push content.
   */
  @Input() overlayClassNames: Array<string> = ['drawer-content-pushed'];


  @HostBinding('class.drawer-opened') get isOpenMethod() { return this.opened; }
  @HostBinding('class') get isPositionMethod() {
    return [...this.positionClassNames, ...this.overlayClassNames];
  }


  constructor() {}

  ngOnInit(): void {

  }

}
