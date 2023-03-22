import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { THEME_FONT_RESIZER_SIZES, THEME_FONT_RESIZER_CSS_VAR } from './theme-font-resizer.constants';


/**
 * ThemeFontResizerComponent component allows user to choose a base font size for the current theme.
 * Actually it sets the <code>--anu-font-size</code> HTML css variable to the selected font size.
 * @date 2/12/2023 - 9:16:09 PM
 *
 * @export
 * @class ThemeFontResizerComponent
 * @typedef {ThemeFontResizerComponent}
 * @implements {OnInit}
 * @implements {OnChanges}
 */
@Component({
  selector: 'anu-theme-font-resizer',
  templateUrl: './theme-font-resizer.component.html',
  styleUrls: ['./theme-font-resizer.component.scss']
})
export class ThemeFontResizerComponent implements OnInit, OnChanges {

  /**
   * List of font sizes to be displayed as buttons on the UI.
   * @date 2/12/2023 - 9:18:21 PM
   *
   * @type {Array<string>}
   */
  @Input() fontSizes: Array<string> = [...THEME_FONT_RESIZER_SIZES];


  /**
   * Selected font Size.
   * @date 2/12/2023 - 9:19:08 PM
   *
   * @type {string}
   */
  @Input() selectedFontSize: string = '';

  /**
   * Event emitted when user clicks/selects any of the font size button from UI.
   * @date 2/12/2023 - 9:20:01 PM
   *
   * @type {EventEmitter<string>}
   */
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.setThemeFontSize();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setThemeFontSize();
  }

  private setThemeFontSize(): void {
    if (this.selectedFontSize && this.fontSizes && this.fontSizes.includes(this.selectedFontSize)) {
      this.themeService.writeCssVarToDom(THEME_FONT_RESIZER_CSS_VAR, this.selectedFontSize);
    }
  }

  public fontSizeClicked(event: any, fontSize: string): void {
    event.preventDefault();
    this.selectedFontSize = fontSize;
    this.setThemeFontSize();
    this.changed.emit(this.selectedFontSize);
  }
}
