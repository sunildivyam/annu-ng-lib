import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitemapService } from './sitemap.service';
import { SitemapComponent } from './sitemap/sitemap.component';
import { CardModule } from '../card/card.module';
import { CollapsibleModule } from '../collapsible/collapsible.module';
import { ModalModule } from '../modal/modal.module';
import { CodeBlockModule } from '../code-block/code-block.module';


@NgModule({
  declarations: [
    SitemapComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    CollapsibleModule,
    ModalModule,
    CodeBlockModule,
  ],
  providers: [
    SitemapService,
  ],
  exports: [
    SitemapComponent,
  ]
})
export class SitemapModule { }
