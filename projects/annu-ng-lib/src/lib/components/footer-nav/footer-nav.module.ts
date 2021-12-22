import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterNavComponent } from './footer-nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FooterNavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterNavComponent]
})
export class FooterNavModule { }
