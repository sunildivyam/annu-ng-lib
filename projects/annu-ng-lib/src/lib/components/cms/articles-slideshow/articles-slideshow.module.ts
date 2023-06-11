import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesSlideshowComponent } from './articles-slideshow.component';
import { SlideshowModule } from '../../common-ui/slideshow/slideshow.module';
import { CardModule } from '../../common-ui/card/card.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArticlesSlideshowComponent],
  imports: [CommonModule, RouterModule, SlideshowModule, CardModule],
  exports: [ArticlesSlideshowComponent],
})
export class ArticlesSlideshowModule {}
