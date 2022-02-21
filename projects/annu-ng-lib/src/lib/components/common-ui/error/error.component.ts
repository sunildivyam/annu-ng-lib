import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'anu-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input() code: string = '';
  @Input() message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
