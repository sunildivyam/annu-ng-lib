import { Component, Injector, Input } from '@angular/core';
import { ComponentProp } from '../docs.interface';
import { PROPERTY_TYPES } from '../constants';

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

  constructor(private injector: Injector) {
    this.name = this.injector.get('name', this.name);
    this.type = this.injector.get('type', this.type);
    this.props = this.injector.get('props', this.props);
  }
}
