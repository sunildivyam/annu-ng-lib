import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anu-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent implements OnInit {
  isOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showModal(event: any, toggle: boolean): void {
    event.preventDefault();
    this.isOpened = toggle;
  }
}
