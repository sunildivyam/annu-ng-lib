import { Component, Output, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'anu-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit, OnChanges {
  @Input() name: string;
  @Input() hue: number;
  @Input() saturation: number;

  @Output() valueChanges = new EventEmitter<Array<string>>();

  colors: Array<string>;
  hueControl: FormControl;
  saturationControl: FormControl;
  headerText: string;
  paletteShades: Array<string>;

  constructor(private themeService: ThemeService) {
    this.name = 'Default';
    this.paletteShades = themeService.paletteShades;

    this.hue = 180;
    this.saturation = 50;

    this.hueControl = new FormControl(this.hue);
    this.saturationControl = new FormControl(this.hue);

    this.hueControl.valueChanges.subscribe(this.hueChanged);
    this.saturationControl.valueChanges.subscribe(this.saturationChanged);
  }

  public hueChanged = (hue: number) => {
    this.colors = this.themeService.getPaletteColors(hue, this.saturationControl.value);
    this.valueChanges.emit(this.colors);
  }

  public saturationChanged = (saturation: number) => {
    this.colors = this.themeService.getPaletteColors(this.hueControl.value, saturation);
    this.valueChanges.emit(this.colors);
  }

  public ngOnInit(): void {
    this.headerText = `${this.name ? this.name : 'Default'} Palette`;
    this.colors = this.themeService.getPaletteColors(this.hue, this.saturation);
    this.valueChanges.emit(this.colors);
  }

  public ngOnChanges(): void {
    this.hueControl.setValue(this.hue);
    this.saturationControl.setValue(this.saturation);
  }
}
