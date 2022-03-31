import { Component, Input, OnInit } from '@angular/core';
import { GuardInfo } from '../docs.interface';

@Component({
  selector: 'anu-guard-info',
  templateUrl: './guard-info.component.html',
  styleUrls: ['./guard-info.component.scss']
})
export class GuardInfoComponent implements OnInit {
  @Input() guardInfo: GuardInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
