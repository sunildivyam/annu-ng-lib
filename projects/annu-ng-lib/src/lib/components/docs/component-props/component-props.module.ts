import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentPropsComponent } from './component-props.component';



@NgModule({
  declarations: [ComponentPropsComponent],
  imports: [
    CommonModule
  ],
  exports: [ComponentPropsComponent],
})
export class ComponentPropsModule { }
