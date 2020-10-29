import { Component, Output, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../../services';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'anu-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit, OnChanges {
  @Input() headerText: string;
  @Input() hue: number;
  @Input() saturation: number;

  @Output() valueChanges = new EventEmitter<Array<string>>();

  colors: Array<string>;
  hueControl: FormControl;
  saturationControl: FormControl;

  constructor(private themeService: ThemeService) {
    this.headerText = 'Default Palette';

    this.hue = 0;
    this.saturation = 90;

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
    this.colors = this.themeService.getPaletteColors(this.hue, this.saturation);
    this.valueChanges.emit(this.colors);
  }

  public ngOnChanges(): void {
    this.hueControl.setValue(this.hue);
    this.saturationControl.setValue(this.saturation);
  }
}
