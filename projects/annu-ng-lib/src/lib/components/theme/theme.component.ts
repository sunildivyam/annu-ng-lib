import { Component } from '@angular/core';
import { ThemeService } from '../../services';
import { Theme } from '../../interfaces';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'anu-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
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
    console.log('Selected Theme', themeName);
    this.themeService.setTheme(themeName);
  }
}
