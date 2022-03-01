import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilsService } from '../../../services';
import { Category } from '.';

@Component({
  selector: 'anu-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() value: Category | null = null;
  @Input() updateHref: Array<string>;
  @Input() showMetaInfo: boolean = true;
  @Input() readMoreHref: Array<string>;   // shows hyperlink to readmore page
  @Input() titleHref: Array<string>;      // shows hyperlink to article full view page

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
