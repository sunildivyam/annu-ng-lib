import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'anu-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {
  @Input() collapsed: boolean = true;
  @Input() hamBurgerClassNames: Array<string> = ['size-md'];
  @Input() isDropdownStyle: boolean = false;
  @Output() changed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
  }

  public toggle(opened: boolean): void {
    this.collapsed = opened;
    this.changed.emit(this.collapsed);
  }
}
