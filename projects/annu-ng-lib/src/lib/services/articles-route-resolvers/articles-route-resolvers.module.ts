import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewRouteResolver } from './home-view-route-resolver/home-view-route.resolver';
import { CategoryViewRouteResolver } from './category-view-route-resolver/category-view-route.resolver';
import { ArticleViewRouteResolver } from './article-view-route-resolver/article-view-route.resolver';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HomeViewRouteResolver,
    CategoryViewRouteResolver,
    ArticleViewRouteResolver,
  ]
})
export class ArticlesRouteResolversModule { }
