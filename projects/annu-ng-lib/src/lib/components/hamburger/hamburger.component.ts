import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'anu-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
@Input() opened: boolean = false;
@Output() changed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public toggle(): void {
    this.opened = !this.opened;
    this.changed.emit(this.opened);
  }

}
