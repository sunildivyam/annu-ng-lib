import { Component, EventEmitter, Injector, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ComponentMethod } from '../docs.interface';

@Component({
  selector: 'anu-service-method',
  templateUrl: './service-method.component.html',
  styleUrls: ['./service-method.component.scss']
})
export class ServiceMethodComponent implements OnInit, OnChanges {
  @Input() method: ComponentMethod = null;
  @Output() changed: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  parameters: Array<any> = []

  constructor(private injector: Injector) {
    this.method = this.injector.get('method', this.method);
    this.changed = this.injector.get('changed', this.changed);
  }

  ngOnInit(): void {
    this.initValues();
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.initValues();
  }

  private initValues() {
    this.parameters = this.method.args.map(arg => ({...arg, value: arg.defaultValue}));
  }

  public onChange(event: any): void {
    event.preventDefault();
    this.changed.emit([...this.parameters]);
  }
}
