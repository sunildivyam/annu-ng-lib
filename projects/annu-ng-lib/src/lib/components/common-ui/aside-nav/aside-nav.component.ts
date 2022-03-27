import { Component, EventEmitter, HostBinding, Injector, Input, OnInit, Output } from '@angular/core';
import { NavItem } from './aside-nav.interface';

/**
 * Shows aside navigation. Allows both header and body content projection. Also NavItems can be passed to it.
 * <h3>Header Content Projection</h3>
 * <ul><li><code>anu-aside-nav-header class="outside/outside-non-collapsible/inside"</code> for projecting heading to multiple locations.</li></ul>
 * <h3>Customized content</h3>
 * <ul><li>Use <code>isCollapsiple</code> property as false, to show non-collapsible aside nav. By default it is collapsible.</li>
 * <li>Use <code>isHamburgerStyle</code> property to show hamburger or collapse/expand icons.</li>
 * <li>Use <code>hamburgerClassNames</code> and <code>drawerClassNames</code> properties to customize hamburger and drawer components of aside nav.</li></ul>
 * @date 9/3/2022 - 2:32:06 pm
 *
 * @export
 * @class AsideNavComponent
 * @typedef {AsideNavComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'anu-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {

  /**
   * NavItems of type NavItem. renders items first if given, then projected content, if any.
   */
  @Input() items: Array<NavItem> | null;
  /**
   * Heading for hamburger outside/outside-non-collapsible/inside sections. Renders heading first if given, then projected header, if any.
   */
  @Input() heading: string;
  /**
   * toggles aside drawer show/hide.
   */
  @Input() opened: boolean = false;
  /**
   * Customize Hamburger with Hamburger css class names, for details, please refer to Hamburger component documentation.
   */
  @Input() hamburgerClassNames: Array<string> = ['size-sm'];
  /**
   * Customize Drawer with Drawer css class names, for details, please refer to Drawer component documentation.
   */
  @Input() drawerClassNames: Array<string> = ['drawer-content-pushed', 'drawer-left'];
  /**
   * If true, shows hamburger icon, else shows expand/collapse icon.
   */
  @Input() isHamburgerStyle: boolean = true;
  /**
   * if true, drawer is collapsible, else shows a non-collapsible drawer.
   */
  @Input() isCollapsible: boolean = true;

  @Output() changed = new EventEmitter<NavItem>();
  @HostBinding('class.aside-nav-collapsible') get isCollapsibleMethod() { return this.isCollapsible };
  @HostBinding('class.aside-nav-opened') get openedMethod() { return this.opened };

  constructor(private injector: Injector) {
    this.items = this.injector.get('items', this.items);
    this.heading = this.injector.get('heading', this.heading);
    setTimeout(() => this.opened = this.injector.get('opened', this.opened))
    this.hamburgerClassNames = this.injector.get('hamburgerClassNames', this.hamburgerClassNames);
    this.drawerClassNames = this.injector.get('drawerClassNames', this.drawerClassNames);
    this.isHamburgerStyle = this.injector.get('isHamburgerStyle', this.isHamburgerStyle);
    this.isCollapsible = this.injector.get('isCollapsible', this.isCollapsible);
  }

  ngOnInit(): void { }

  public navClicked(event: any, item: NavItem) {
    if (!item.href) {
      event.preventDefault();
    }
    if (this.isCollapsible) {
      this.opened = false;
    }

    this.changed.emit(item);
  }

  public hamburgerChanged(opened: boolean) {
    this.opened = opened;
  }
}
