import { Component } from '@angular/core';
import { ThemeService } from '../../services';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'anu-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent {
  colors: Array<string>;
  hueControl: FormControl;

  constructor(private themeService: ThemeService) {
    this.hueControl = new FormControl(0);
    this.colors = this.themeService.getPaletteColors(this.hueControl.value);
    this.hueControl.valueChanges.subscribe(this.hueChanged);
  }

  public hueChanged = (hue: number) => {
    this.colors = this.themeService.getPaletteColors(hue);
  }
}
