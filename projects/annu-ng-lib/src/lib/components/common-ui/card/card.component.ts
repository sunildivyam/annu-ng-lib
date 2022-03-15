import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


/**
 * passing class="nowrap" or nowrap-* variations to the card from consumer, will enable horizontal card.
 * Otherwise it will display a verical card.
 * padding of the card is also control from consuemer component.
 *
 * @export
 * @class CardComponent
 * @typedef {CardComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'anu-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {
  @Input() isRowLayout: boolean = false;
  @Input() imageCssClasses: Array<string> = [];
  @Input() contentCssClasses: Array<string> = [];

  @HostBinding('class') rowLayout = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      this.rowLayout = this.isRowLayout ? 'nowrap': '';
  }

}
