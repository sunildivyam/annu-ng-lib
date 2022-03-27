import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'anu-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() rounded: boolean = false;
  @Input() checked: boolean = false;

  @Output() changed = new EventEmitter<boolean>();

  constructor(private injector: Injector) {
    this.rounded = this.injector.get('rounded', this.rounded);
    this.checked = this.injector.get('checked', this.checked);
    this.changed = this.injector.get('changed', this.changed);
   }

  ngOnInit(): void {
  }

  public toggled(value:any) {
    this.changed.emit(value.currentTarget.checked);
  }
}
