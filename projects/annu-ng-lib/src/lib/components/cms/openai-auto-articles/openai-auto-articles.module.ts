import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenaiAutoArticlesComponent } from './openai-auto-articles.component';
import { OpenaiFormModule } from '../../common-ui/openai-form/openai-form.module';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from '../../common-ui/spinner/spinner.module';
import { CollapsibleModule } from '../../common-ui/collapsible/collapsible.module';
import { ModalModule } from '../../common-ui/modal/modal.module';



@NgModule({
  declarations: [
    OpenaiAutoArticlesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OpenaiFormModule,
    SpinnerModule,
    CollapsibleModule,
    ModalModule,
  ],
  exports: [
    OpenaiAutoArticlesComponent
  ]
})
export class OpenaiAutoArticlesModule { }
