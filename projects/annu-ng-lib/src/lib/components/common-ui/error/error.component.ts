import { Component, Injector, Input, OnInit } from '@angular/core';

@Component({
  selector: 'anu-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input() code: string = '';
  @Input() message: string = '';

  constructor(private injector: Injector) {
    this.code = this.injector.get('code', this.code);
    this.message = this.injector.get('message', this.message);
   }

  ngOnInit(): void {
  }

}
