import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaService } from './meta.service';
import { Meta } from '@angular/platform-browser';
import { MetaFormComponent } from './meta-form/meta-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from '../modal/modal.module';
import { CollapsibleModule } from '../collapsible/collapsible.module';



@NgModule({
  declarations: [
    MetaFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule,
    CollapsibleModule,
  ],
  exports: [MetaFormComponent],
  providers: [Meta, MetaService],
})
export class MetaModule { }
