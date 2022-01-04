import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentPropsComponent } from './component-props/component-props.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentInfoComponent } from './component-info/component-info.component';
import { TabsModule, CardModule, CodeBlockModule } from '../common-ui';
import { DocsService } from './docs.service';


@NgModule({
  declarations: [
    ComponentPropsComponent,
    ComponentInfoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TabsModule,
    CardModule,
    CodeBlockModule
  ],
  providers: [DocsService],
  exports: [
    ComponentPropsComponent,
    ComponentInfoComponent
  ],
})
export class DocsModule { }
