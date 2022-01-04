import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Typography } from '@annu-ng-lib';

@Component({
  selector: 'anu-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {
  @Input() typography: Array<Typography> = [];
  @Output() typographyChanged = new EventEmitter<Array<Typography>>();
  
  constructor() {}

  ngOnInit(): void {}

}
