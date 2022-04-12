import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageFireStoreService } from '../../../firebase/image-storage';
import { ImageFileInfo } from '../image-browser/image-browser.interface';
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

  constructor() { }

  ngOnInit(): void {
  }

  public cancelClicked(event) {
    event.preventDefault();
    this.cancel.emit();
  }

  public saveClicked(event) {
    event.preventDefault();
    this.save.emit({ src: this.src, alt: this.alt } as ImageInfo);
  }

  public onFileBrowserSelect(imageFileInfo: ImageFileInfo): void {
    this.src = imageFileInfo.downloadUrl;
  }

}
