import { Component, Input } from '@angular/core';
import { ComponentProp } from '../docs.interface';
import { PROPERTY_TYPES } from '../docs.constants';

@Component({
  selector: 'anu-component-props',
  templateUrl: './component-props.component.html',
  styleUrls: ['./component-props.component.scss']
})
export class ComponentPropsComponent {
  @Input() name: string = '';
  @Input() type: string = '';
  @Input() props: Array<ComponentProp> = [];

  propertyTypes: typeof PROPERTY_TYPES = PROPERTY_TYPES;

  constructor() {}
}
