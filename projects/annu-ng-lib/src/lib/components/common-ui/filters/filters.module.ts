import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters.component';
import { MultiSelectBoxModule } from '../multi-select-box/multi-select-box.module';
import { ToggleModule } from '../toggle/toggle.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FiltersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MultiSelectBoxModule,
    ToggleModule,
  ],
  exports: [
    FiltersComponent
  ],
})
export class FiltersModule { }
