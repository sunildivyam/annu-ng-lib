import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesHomeViewRouteResolver } from './articles-home-view-route-resolver/articles-home-view-route.resolver';
import { CategoryViewRouteResolver } from './category-view-route-resolver/category-view-route.resolver';
import { ArticleViewRouteResolver } from './article-view-route-resolver/article-view-route.resolver';
import { MyCategoriesViewRouteResolver } from './my-categories-view-route-resolver/my-categories-view-route.resolver';
import { MyArticlesViewRouteResolver } from './my-articles-view-route-resolver/my-articles-view-route.resolver';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ArticlesHomeViewRouteResolver,
    CategoryViewRouteResolver,
    ArticleViewRouteResolver,
    MyCategoriesViewRouteResolver,
    MyArticlesViewRouteResolver,
  ]
})
export class ArticlesRouteResolversModule { }
