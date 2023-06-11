import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './slideshow.component';

@NgModule({
  declarations: [SlideshowComponent],
  imports: [CommonModule],
  exports: [SlideshowComponent],
})
export class SlideshowModule {}
