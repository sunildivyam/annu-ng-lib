import { Component, Output, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { FormControl } from '@angular/forms';
import { ColorPalette } from '../theme/theme.interface';

@Component({
  selector: 'anu-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit, OnChanges {
  @Input() colorPalette: ColorPalette;
  @Output() valueChanges = new EventEmitter<ColorPalette>();

  hueControl: FormControl;
  saturationControl: FormControl;
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

  private buildPalette() {
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
