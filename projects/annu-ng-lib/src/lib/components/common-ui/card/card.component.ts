import { Component, HostBinding, Injector, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


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
export class CardComponent {
  @Input() isRowLayout: boolean = false;
  @Input() imageCssClasses: Array<string> = [];
  @Input() contentCssClasses: Array<string> = [];

  @HostBinding('class.nowrap') get isRowLayoutMethod() { return this.isRowLayout};

  constructor(private injector: Injector) {
    this.isRowLayout = this.injector.get('isRowLayout', this.isRowLayout);
    this.imageCssClasses = this.injector.get('imageCssClasses', this.imageCssClasses);
    this.contentCssClasses = this.injector.get('contentCssClasses', this.contentCssClasses);
  }

}
