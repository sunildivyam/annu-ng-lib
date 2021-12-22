import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardFooterComponent } from './card-footer/card-footer.component';

@NgModule({
  declarations: [CardComponent, CardTitleComponent, CardImageComponent, CardBodyComponent, CardFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, CardTitleComponent, CardImageComponent, CardBodyComponent, CardFooterComponent]
})
export class CardModule { }
