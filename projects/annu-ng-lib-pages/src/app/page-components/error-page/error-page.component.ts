import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anu-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  error: any = { code: '400', message: 'Data does not exist.' };
  constructor() { }

  ngOnInit(): void {
  }

}
