import { Component, Output, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ColorPalette } from './color-palette.interface';

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
  @Input() colorPalette: ColorPalette = {
    name: 'Default',
    hue: 180,
    saturation: 50,
    colors: []
  };
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
   * Property bound to slider form controls group, that allow to get/set light value to all colors
   */
  lightsForm: FormGroup;

  /**
   * A property bound to header title of component palette name postfixed with Pallete. eg. "Primary Palette"
   */
  headerText: string;

  constructor(private themeService: ThemeService, private fb: FormBuilder) {
    this.colorPalette.colors = this.themeService.getPaletteColors(this.colorPalette.hue, this.colorPalette.saturation);
    this.lightsForm = this.fb.group({
      name: 'lightsGroup',
      lightControls: this.fb.array([])
    });
  }


  public get lightControls() : FormArray {
    return this.lightsForm.get('lightControls') as FormArray;
  }

  private initFormControls() {
    //Initialize form controls
    this.hueControl = new FormControl(this.colorPalette.hue);
    this.saturationControl = new FormControl(this.colorPalette.saturation);
    this.colorPalette.colors.forEach(cl => this.lightControls.push(new FormControl(cl.l)));

    // Subscribe to valueChange of form controls
    this.hueControl.valueChanges.subscribe(this.hueChanged);
    this.saturationControl.valueChanges.subscribe(this.saturationChanged);
    this.lightControls.valueChanges.subscribe(this.lightChanged);

    // this.lightControls.forEach(ctrl => ctrl.valueChanges.subscribe(this.lightChanged));
  }

  /**
   * Builds the palette from current hue and saturation, and emits the valueChanges event, with the colorPalette object.
   */
  public  updateColorPalette(hue: number | undefined | null, saturation: number | undefined | null, lights: Array<number> | undefined | null = undefined): void {
    this.headerText = `${this.colorPalette.name ? this.colorPalette.name : 'Default'} Palette`;
    this.colorPalette.colors.forEach((cl, index) => {
      cl.h = hue === cl.h ? cl.h : hue;
      cl.s = saturation === cl.s ? cl.s : saturation;
      if (lights instanceof Array) {
        cl.l = lights[index];
      }
      cl.hsl = `hsl(${cl.h}, ${cl.s}%, ${cl.l}%)`
    });

    this.colorPalette.hue = hue;
    this.colorPalette.saturation = saturation;
    this.valueChanges.emit(this.colorPalette);
  }

  public hueChanged = (hue: number) => {
    this.colorPalette.hue = hue;
    this.updateColorPalette(hue, this.colorPalette.saturation);
  }

  public saturationChanged = (saturation: number) => {
    this.colorPalette.saturation = saturation;
    this.updateColorPalette(this.colorPalette.hue, saturation);
  }

  public lightChanged = (lights: Array<number>) => {
    this.updateColorPalette(this.colorPalette.hue, this.colorPalette.saturation, lights);
  }

  public ngOnInit(): void {
    this.initFormControls();
    this.updateColorPalette(this.colorPalette.hue, this.colorPalette.saturation);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.colorPalette && !this.colorPalette?.colors?.length) {
      this.colorPalette.colors = this.themeService.getPaletteColors(this.colorPalette.hue, this.colorPalette.saturation);
      this.lightControls.controls.forEach((ctrl, index) => ctrl.setValue(this.colorPalette.colors[index].l, {emitEvent: false}));
    }
  }
}
