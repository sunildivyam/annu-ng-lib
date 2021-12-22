import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'anu-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {
  selectedTheme: string;

  constructor(public themeService: ThemeService) { }

  public ngOnInit(): void {
    this.selectedTheme = this.themeService.theme;
  }

  public themeSelected = (themeName: string): void => {
    this.selectedTheme = themeName;
    this.themeService.setTheme(themeName);
  }

  public invert(invert: boolean): void {   
    this.themeService.toggleInvert(invert);
  }
}
