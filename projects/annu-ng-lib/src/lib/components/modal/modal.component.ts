import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'anu-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnChanges {
  @Input() opened: boolean = false;
  @HostBinding('style.display') show = 'none';

  constructor() { }

  private showHide() {
    if (this.opened) {
      this.show = 'flex';
    } else {
      this.show = 'none';
    }
  }
  ngOnInit(): void {
    this.showHide();
  }

  ngOnChanges(): void {
    this.showHide();
  }
}
