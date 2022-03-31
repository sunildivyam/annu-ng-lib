import { Component, Input, OnInit } from '@angular/core';
import { InterfaceInfo } from '../docs.interface';

@Component({
  selector: 'anu-interface-info',
  templateUrl: './interface-info.component.html',
  styleUrls: ['./interface-info.component.scss']
})
export class InterfaceInfoComponent implements OnInit {
  @Input() interfaceInfo: InterfaceInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
