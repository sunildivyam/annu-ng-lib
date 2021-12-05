import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tab } from './tabs.interface';

@Component({
  selector: 'anu-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tabs: Array<Tab>;
  @Output() tabChanged = new EventEmitter<Tab>();
  
  constructor() {
    this.tabs = []
  }

  ngOnInit(): void {
  }

}
