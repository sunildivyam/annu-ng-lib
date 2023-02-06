import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';


/**
 * Hamburger component shows a hamburger icon button and optionally a <code>heading</code> text along.
 * An Expand button style can also be shown, if you set <code>isHamburgerStyle</code> property to false.
 * Passing <code>size-sm/-md/-lg</code> classes, enables to resize accordingly.
 * @date 8/3/2022 - 5:53:16 pm
 *
 * @export
 * @class HamburgerComponent
 * @typedef {HamburgerComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'anu-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  /**
   * Enables toggle open/close states.
   */
  @Input() opened: boolean = false;
  /**
   * Sets optional heading text, that can be shown along icon.
   */
  @Input() heading: string = '';
  /**
   * Enables hamburger style icon or Expand/collapse icons.
   */
  @Input() isHamburgerStyle: boolean = true;

  /**
   * Enables dropdown like icon and behavior.
   */
  @Input() isDropdownStyle: boolean = false;

  /**
   * <code>changed</code> event is emitted, when opened state changes/toggles.
   */
  @Output() changed = new EventEmitter<boolean>();
  /**
   * toggles hamburger-opened css class, when opened state changes/toggles.
   */
  @HostBinding('class.hamburger-opened') get openedMethod() { return this.opened; }

  /**
     * toggles hamburger-dropdown css class, when isDropdownStyle state changes/toggles.
     */
  @HostBinding('class.hamburger-dropdown') get dropdownStyleMethod() { return this.isDropdownStyle; }

  /**
   * Click host event listener when host is clicked.
   */
  @HostListener('click') toggleMethod() { this.toggle() }

  constructor() { }

  ngOnInit(): void {
  }

  public toggle(): void {
    this.opened = !this.opened;
    this.changed.emit(this.opened);
  }

}
