import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../theme/theme.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'anu-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {
  selectedTheme: string;
  // listControl: FormControl;
  invertControl: FormControl;

  constructor(public themeService: ThemeService) {
    this.invertControl = new FormControl(false);
    // this.listControl = new FormControl(this.themeService.theme);

    this.invertControl.valueChanges.subscribe((value: boolean) => this.themeService.toggleInvert(value));
    // this.listControl.valueChanges.subscribe(this.themeSelected);
  }

  public ngOnInit(): void {
    this.selectedTheme = this.themeService.theme;
  }

  public themeSelected = (themeName: string): void => {
    this.selectedTheme = themeName;
    this.themeService.setTheme(themeName);
  }

}
