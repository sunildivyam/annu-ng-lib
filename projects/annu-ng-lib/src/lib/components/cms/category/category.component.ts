import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilsService } from '../../../services';
import { Category } from '.';

@Component({
  selector: 'anu-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() value: Category
  @Input() updateHref: string = '';
  @Output() updateClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(public utilsSvc: UtilsService) { }

  ngOnInit(): void {
  }

  public updateBtnClicked(event: any): void {
    if (!this.updateHref) {
      event.preventDefault();
    }

    this.updateClicked.emit();
  }
}
