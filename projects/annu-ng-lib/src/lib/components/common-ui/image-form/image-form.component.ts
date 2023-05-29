import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageFileInfo } from '../image-browser/image-browser.interface';
import { ImageInfo } from './image-form.interface';
import { LibConfig } from '../../../app-config/app-config.interface';

@Component({
  selector: 'anu-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() helpText: string = '';
  @Input() isSrcFromFirebase: boolean = false;  // if select images as Firebase storage download urls else API url
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<ImageInfo>();

  selectedImage: ImageFileInfo;

  constructor(private libConfig: LibConfig) { }

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
    if (this.isSrcFromFirebase === true) {
      this.src = imageFileInfo.downloadUrl;
    } else {
      this.src = `${this.libConfig.imagesSourceUrl}${imageFileInfo.fullPath}`;
    }

    this.selectedImage = imageFileInfo;
  }

}
