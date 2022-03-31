import { Component, Input, OnInit } from '@angular/core';
import { DirectiveInfo } from '../docs.interface';

@Component({
  selector: 'anu-directive-info',
  templateUrl: './directive-info.component.html',
  styleUrls: ['./directive-info.component.scss']
})
export class DirectiveInfoComponent implements OnInit {
  @Input() directiveInfo: DirectiveInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
