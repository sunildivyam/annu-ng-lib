import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'anu-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {
@Input() collapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
