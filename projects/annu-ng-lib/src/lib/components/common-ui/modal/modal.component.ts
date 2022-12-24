import { Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';


/**
 * Shows a modal box, optionally shows actions buttons in it.
 * ModalBox Component provides events for modal ations.
 */
@Component({
  selector: 'anu-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnChanges {

  /**
   * Toggling <code>opened</code> property, shows/hides the modal.
   */
  @Input() opened: boolean = false;

  /**
   * Title of the modal.
   */
  @Input() title: string = '';

  /**
   * Ok button label, default is <code>Ok</code>
   */
  @Input() okLabel: string = 'Ok';

  /**
   * Cancel button label, default is <code>Cancel</code>
   */
  @Input() cancelLabel: string = 'Cancel';

  /**
   * Shows/hides the <code>Ok</code> button at the bottom of the modal.
   */
  @Input() enableOk: boolean = false;

  /**
   * Shows/hides the <code>Cancel</code> button at the bottom of the modal.
   */
  @Input() enableCancel: boolean = false;

  /**
   * Shows/hides the <code>X</code> icon button at the top right of the modal.
   */
  @Input() enableClose: boolean = true;

  /**
   * This closes the modal and emits the <code>okClick</code> event when <code>Ok</code> button is clicked.
   *
   */
  @Output() okClick = new EventEmitter<boolean>();

  /**
   * This closes the modal and emits the <code>cancelClick</code> event when <code>Cancel</code> or <code>X</code> button is clicked.
   *
   */
  @Output() cancelClick = new EventEmitter<boolean>();

  /**
   * Class binding when modal is opened or closed.
   *
   */
  @HostBinding('class.modal-opened') get isOpenMethod() { return this.opened; }

  constructor() { }


  ngOnInit(): void { }

  ngOnChanges(): void { }

  public okClicked(): void {
    this.opened = false;
    this.okClick.emit(false);
  }

  public cancelClicked(): void {
    this.opened = false;
    this.cancelClick.emit(false);
  }
}
