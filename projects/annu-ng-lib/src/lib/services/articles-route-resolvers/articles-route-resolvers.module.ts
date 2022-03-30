import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesHomeViewRouteResolver } from './articles-home-view-route-resolver/articles-home-view-route.resolver';
import { CategoryViewRouteResolver } from './category-view-route-resolver/category-view-route.resolver';
import { ArticleViewRouteResolver } from './article-view-route-resolver/article-view-route.resolver';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ArticlesHomeViewRouteResolver,
    CategoryViewRouteResolver,
    ArticleViewRouteResolver,
  ]
})
export class ArticlesRouteResolversModule { }
