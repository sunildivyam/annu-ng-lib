import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LINK_TARGETS } from './link-form.constants';
import { Link, LinkTarget } from './link-form.interface';

/**
 * LinkForm component enables the user to add/update details of a hyperlink.
 */
@Component({
  selector: 'anu-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.scss']
})
export class LinkFormComponent implements OnInit {

  /**
   * Hyperlink URL, where user will be navigated to, when hyperlink is clicked.
   */
  @Input() href: string = 'https://';

  /**
   * Hyperlink title, text displayed in a tooltip on hovering over the hyperlink.
   */
  @Input() title: string = '';

  /**
   * Hyperlink label, the text that will act as a hyperlink
   */
  @Input() label: string = '';

  /**
   * Hyperlink target, where the hyperlink URL will open, when hyperlink is clicked.
   */
  @Input() target: string = '';

  /**
   * <code>cancel</code> event will emit, when <code>Cancel</code> button is clicked on the form.
   */
  @Output() cancel = new EventEmitter();

  /**
   * <code>save</code> event will emit, when <code>Save</code> button is clicked on the form.
   */
  @Output() save = new EventEmitter<Link>();

  linkTargets: Array<LinkTarget> = [...LINK_TARGETS];

  constructor() { }

  ngOnInit(): void {
  }

  public cancelClicked(event) {
    event.preventDefault();
    this.cancel.emit();
  }

  public saveClicked(event) {
    event.preventDefault();
    this.save.emit({
      href: this.href,
      title: this.title,
      label: this.label,
      target: this.target,
    } as Link);
  }
}
