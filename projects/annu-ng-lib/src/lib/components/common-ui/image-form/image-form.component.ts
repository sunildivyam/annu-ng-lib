import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageInfo } from './image-form.interface';

@Component({
  selector: 'anu-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<ImageInfo>();

  imageData: any;

  constructor() { }

  ngOnInit(): void {
  }

  public cancelClicked(event) {
    event.preventDefault();
    this.cancel.emit();
  }

  public saveClicked(event) {
    event.preventDefault();
    this.save.emit({ src: this.src, alt: this.alt, imageData: this.imageData } as ImageInfo);
  }

  public onFileChange(event: any): void {
    this.imageData = null;
    if (event.target.files.length > 0) {
      this.imageData = event.target.files[0];
    }
  }
}
