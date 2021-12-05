import { Component } from '@angular/core';

import { ThemeService } from '../theme/theme.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'anu-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent {
  selectedTheme: string;
  listControl: FormControl;
  invertControl: FormControl;

  constructor(public themeService: ThemeService) {
    this.invertControl = new FormControl(false);
    this.listControl = new FormControl(this.themeService.theme);

    this.invertControl.valueChanges.subscribe((value: boolean) => this.themeService.toggleInvert(value));
    this.listControl.valueChanges.subscribe(this.themeSelected);
  }

  public themeSelected = (themeName: string): void => {
    this.themeService.setTheme(themeName);
  }
}
