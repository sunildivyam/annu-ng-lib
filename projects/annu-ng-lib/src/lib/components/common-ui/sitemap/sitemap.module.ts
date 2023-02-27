import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitemapService } from './sitemap.service';
import { SitemapComponent } from './sitemap/sitemap.component';
import { CardModule } from '../card/card.module';
import { CollapsibleModule } from '../collapsible/collapsible.module';


@NgModule({
  declarations: [
    SitemapComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    CollapsibleModule,
  ],
  providers: [
    SitemapService,
  ],
  exports: [
    SitemapComponent,
  ]
})
export class SitemapModule { }
