import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CardModule } from '../../common-ui';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule,
  ],
  exports: [
    CategoryComponent
  ],
})
export class CategoryModule { }
