import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'anu-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {
  @Input() collapsed: boolean = true;
  @Input() hamBurgerClassNames: Array<string> = ['size-md'];
  @Output() changed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public injector: Injector) {
    this.collapsed = this.injector.get('collapsed', this.collapsed);
    this.hamBurgerClassNames = this.injector.get('hamBurgerClassNames', this.hamBurgerClassNames);
    this.changed = this.injector.get('changed', this.changed);
  }

  ngOnInit(): void {
  }

  public toggle(opened: boolean): void {
    this.collapsed = opened;
    this.changed.emit(this.collapsed);
  }
}
