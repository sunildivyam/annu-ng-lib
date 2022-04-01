import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Link } from './link-form.interface';

@Component({
  selector: 'anu-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.scss']
})
export class LinkFormComponent implements OnInit {
  @Input() href: string = 'https://';
  @Input() title: string = '';
  @Input() label: string = '';
  @Input() target: string = '';

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<Link>();

  constructor() {}

  ngOnInit(): void {
  }

  public cancelClicked(event) {
    event.preventDefault();
    this.cancel.emit();
  }

  public saveClicked(event) {
    event.preventDefault();
    this.save.emit({
      href: this.href,
      title: this.title,
      label: this.label,
      target: this.target,
    } as Link);
  }
}
