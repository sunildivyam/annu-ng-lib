import { Component, Output, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { FormControl } from '@angular/forms';
import { ColorPalette } from '../theme/theme.interface';

/**
 * ColorPaletteComponent generates 9 shades of colors based on input property, <code>colorPalette.hue</code> and <code>colorPalette.saturation</code>, ranging from DeepDark ... Normal ... DeepLight.
 * Shades are generated based on calculated Lightness of the color.
 */
@Component({
  selector: 'anu-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit, OnChanges {

  /**
   * A ColorPalette Objcet containg name, hue, saturation, and colors array
   */
  @Input() colorPalette: ColorPalette;
  /**
   * Emits ColorPalette objcet, as any of the ColorPalette value changes.
   */
  @Output() valueChanges = new EventEmitter<ColorPalette>();

  /**
   * A property bound to slider form control, that allow to get/set hue value
   */
  hueControl: FormControl;
  /**
   * A property bound to slider form control, that allow to get/set saturation value
   */
  saturationControl: FormControl;
  /**
   * A property bound to header title of component palette name postfixed with Pallete. eg. "Primary Palette"
   */
  headerText: string;

  constructor(private themeService: ThemeService) {
    this.colorPalette = {
      name: 'Default',
      hue: 180,
      saturation: 50,
      colors: []
    } as ColorPalette;

    this.hueControl = new FormControl(this.colorPalette.hue);
    this.saturationControl = new FormControl(this.colorPalette.saturation);
    this.hueControl.valueChanges.subscribe(this.hueChanged);
    this.saturationControl.valueChanges.subscribe(this.saturationChanged);
  }
  /**
   * Builds the palette from current hue and saturation, and emits the valueChanges event, with the colorPalette object.
   */
  public  buildPalette(): void {
    this.headerText = `${this.colorPalette.name ? this.colorPalette.name : 'Default'} Palette`;
    this.colorPalette.colors = this.themeService.getPaletteColors(this.colorPalette.hue, this.colorPalette.saturation);
    this.valueChanges.emit(this.colorPalette);
  }

  public hueChanged = (hue: number) => {
    this.colorPalette.hue = hue;
    this.buildPalette()
  }

  public saturationChanged = (saturation: number) => {
    this.colorPalette.saturation = saturation;
    this.buildPalette();
  }

  public ngOnInit(): void {
    this.buildPalette();
  }

  public ngOnChanges(): void {
    this.hueControl.setValue(this.colorPalette.hue);
    this.saturationControl.setValue(this.colorPalette.saturation);
    this.buildPalette();
  }
}
