import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { MenuItem } from '../menu';

@Component({
  selector: 'anu-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent implements OnInit {
  @Input() copyrightText: string;
  @Input() items: Array<MenuItem> = [];
  @Output() selected = new EventEmitter<MenuItem>();

  constructor(private injector: Injector) {
    this.copyrightText = this.injector.get('copyrightText', this.copyrightText);
    this.items = this.injector.get('items', this.items);
    this.selected = this.injector.get('selected', this.selected);
  }

  ngOnInit(): void {
  }

  public itemCliked(item: MenuItem): void {
    this.selected.emit(item);
  }
}
