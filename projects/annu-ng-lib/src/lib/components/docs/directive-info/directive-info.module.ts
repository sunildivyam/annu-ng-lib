import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveInfoComponent } from './directive-info.component';



@NgModule({
  declarations: [
    DirectiveInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectiveInfoComponent
  ],
})
export class DirectiveInfoModule { }
