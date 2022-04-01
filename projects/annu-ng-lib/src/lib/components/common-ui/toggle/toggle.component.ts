import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'anu-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() rounded: boolean = false;
  @Input() checked: boolean = false;

  @Output() changed = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
  }

  public toggled(value:any) {
    this.changed.emit(value.currentTarget.checked);
  }
}
