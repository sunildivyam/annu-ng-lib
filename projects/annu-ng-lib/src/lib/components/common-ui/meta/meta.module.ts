import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaService } from './meta.service';
import { Meta } from '@angular/platform-browser';
import { MetaFormComponent } from './meta-form/meta-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from '../modal';



@NgModule({
  declarations: [
    MetaFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule
  ],
  exports: [MetaFormComponent],
  providers: [Meta, MetaService],
})
export class MetaModule { }
