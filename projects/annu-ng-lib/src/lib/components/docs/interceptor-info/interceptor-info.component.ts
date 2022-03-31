import { Component, Input, OnInit } from '@angular/core';
import { InterceptorInfo } from '../docs.interface';

@Component({
  selector: 'anu-interceptor-info',
  templateUrl: './interceptor-info.component.html',
  styleUrls: ['./interceptor-info.component.scss']
})
export class InterceptorInfoComponent implements OnInit {
  @Input() interceptorInfo: InterceptorInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
