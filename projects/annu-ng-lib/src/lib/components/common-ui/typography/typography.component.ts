import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Typography } from '@annu-ng-lib';

@Component({
  selector: 'anu-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {
  @Input() typography: Array<Typography> = [];
  @Output() changed = new EventEmitter<Array<Typography>>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * addTypography()  Adds a new Typography variable.
   */
  public addTypography(event: any) {
    event.preventDefault();
    this.typography.push({name: 'camelCaseName', value: '0px'});
    this.typographyChanged();
  }

  /**
   * removeTypography() removes a Typography variable.
   */
  public removeTypography(event: any, index: number) {
    event.preventDefault();
    this.typography.splice(index, 1);
    this.typographyChanged();
  }

  /**
   * typographyChanged() emits changed event when a variable's value is changed, or added/removed.
   */
  public typographyChanged() {
    const validated = [...this.typography.filter(t => t.name.trim() && t.value.trim() ? true : false)];
    this.changed.emit(validated.map(t => ({...t})));
  }
}
