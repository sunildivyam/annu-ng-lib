import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetaInfo, MetaProp } from '../meta.interface';
import { META_PROPS } from '../constants';
import { MetaService } from '../meta.service';

/**
 * MetaFormComponent provides you a form that allows you to input meta information for a page, and returns the <code>metaInfo</code> object.
 * This <code>metaInfo</code> object can be used by the <code>MetaService</code> to generate all meta tags, including primary and social media meta tags.
 */
@Component({
  selector: 'anu-meta-form',
  templateUrl: './meta-form.component.html',
  styleUrls: ['./meta-form.component.scss']
})
export class MetaFormComponent implements OnInit, OnChanges {
  @Input() metaInfo: MetaInfo;
  @Output() changed: EventEmitter<MetaInfo>;

  public metaProps: Array<MetaProp>;
  public metaForm: FormGroup;
  public toggleModal: boolean = false;
  public metaTags: Array<string> = [];
  public metaInfoJsonStr: string = '';

  constructor(private fb: FormBuilder, private metaService: MetaService) {
    this.changed = new EventEmitter<MetaInfo>();
    this.metaProps = META_PROPS.map(p => ({ ...p }));

    const formGroup = {};
    this.metaProps.forEach((p: MetaProp) => {
      const validators = [];
      if (p.required) validators.push(Validators.required);
      if (p.min) validators.push(Validators.min(p.min));
      if (p.max) validators.push(Validators.max(p.max));
      formGroup[p.name] = fb.control(p.defaultValue || '', validators);
    });

    this.metaForm = fb.group(formGroup);

    this.metaForm.valueChanges.subscribe(value => {
      this.metaInfo = value as MetaInfo;
    })
  }

  private setValues(metaInfo: MetaInfo) {
    const formValues = {};
    this.metaProps.forEach((p: MetaProp) => {
      formValues[p.name] = metaInfo?.[p.name] || p.defaultValue || '';
    });

    this.metaForm.patchValue(formValues);
  }

  ngOnInit(): void {
    this.setValues(this.metaInfo);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setValues(this.metaInfo);
  }

  public metaChanged(event: any, isBlur: boolean = false) {
    if (!isBlur) event.preventDefault();

    // if (this.metaForm.invalid || !this.metaForm.dirty) return;
    this.changed.emit({ ...this.metaInfo });
  }

  public previewMetaTags(event: any) {
    event.preventDefault();
    this.toggleModal = true;
    this.metaTags = this.metaService.getTagsAsString(this.metaInfo);
    this.metaInfoJsonStr = JSON.stringify(this.metaInfo, null, '\t');
  }

  public closeMetaTags(event: any) {
    event.preventDefault();
    this.toggleModal = false;
  }
}
