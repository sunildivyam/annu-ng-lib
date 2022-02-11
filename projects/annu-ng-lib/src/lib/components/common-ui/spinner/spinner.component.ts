import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

/**
 * Spinner component shows a spinner, to let user know that something is loading or in progress.
 * Spinner component allows you to show in various sizes, themecolor and with various speeds.
 *
 * @export
 * @class SpinnerComponent
 * @typedef {SpinnerComponent}
 * @implements {OnInit, OnChanges}
 */
@Component({
  selector: 'anu-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnChanges {
  /**
   * Shows or  hides the spinner
   */
  @Input() show: boolean = false;
  /**
   * Shows the spinner fullscreen if true, else shows into the relative parent.
   */
  @Input() fullscreen: boolean = false;
  /**
   * Changes the size of the spinner to one of the sm/md/lg.
   */
  @Input() size: string = 'md';

  /**
   * Changes the spinner color to primary or secondary theme.
   */
  @Input() theme: string = 'primary';

  /**
   * Changes the spinner rotation speed to one of the slow/normal/fast.
   */
   @Input() speed: string = 'normal';

  /**
   * Binds the <code>display</code> style property to the display class varibale, that is set when <code>show</code> Input property changes.
   */
  @HostBinding('style.display') display = 'none';

  /**
   * Binds the <code>position</code> style property to the position class varibale, that is set when <code>fullscreen</code> Input property changes.
   */
   @HostBinding('style.position') position = 'absolute';

  constructor() { }

  /**
   * Initializes the display and position bound style properties.
   */
  ngOnInit(): void {
    this.display = this.show ? 'flex' : 'none';
    this.position = this.fullscreen ? 'fixed' : 'absolute';
  }

  /**
   * Updates the display and position bound style properties, when changed.
   */
  ngOnChanges(): void {
    this.display = this.show ? 'flex' : 'none';
    this.position = this.fullscreen ? 'fixed' : 'absolute';
  }
}
