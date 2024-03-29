import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryArticlesListComponent } from './category-articles-list.component';
import { RouterModule } from '@angular/router';
import { ErrorModule } from '../../common-ui/error';



@NgModule({
  declarations: [
    CategoryArticlesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ErrorModule,
  ],
  exports: [
    CategoryArticlesListComponent
  ],
})
export class CategoryArticlesListModule { }
