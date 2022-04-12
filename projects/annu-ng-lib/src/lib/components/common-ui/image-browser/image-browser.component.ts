import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthFirebaseService } from '../../../firebase/auth';
import { ImageFireStoreService } from '../../../firebase/image-storage';
import { ImageFileInfo } from './image-browser.interface';

const PAGE_SIZE = 10;

@Component({
  selector: 'anu-image-browser',
  templateUrl: './image-browser.component.html',
  styleUrls: ['./image-browser.component.scss']
})
export class ImageBrowserComponent implements OnInit {
  @Input() selectedImage: ImageFileInfo;
  @Input() imageClassNames: Array<string> = ['col-sm-12', 'col-md-4', 'col-lg-4', 'shadow', 'spacing'];
  @Output() selected: EventEmitter<ImageFileInfo> = new EventEmitter<ImageFileInfo>();

  imagesFiles: Array<ImageFileInfo> = [];
  nextPageToken: any;
  error: any;
  loading: boolean = false;
  loadingPreview: boolean = false;
  choosenFileName: string = '';

  constructor(private imageFireSvc: ImageFireStoreService, private authSvc: AuthFirebaseService) { }

  private async deleteImageFile(imageFile: ImageFileInfo) {
    this.error = null;
    this.loading = true;

    try {
      await this.imageFireSvc.deleteImage(imageFile.name, this.authSvc.getCurrentUserId());
      // Once deleted from firebase, remove from the local list too.
      this.imagesFiles = this.imagesFiles.filter(imgFile => imgFile.downloadUrl !== imageFile.downloadUrl);
      this.loading = false;
    } catch (error: any) {
      this.error = error;
      this.loading = false;
    }
  }

  private async uploadImageFile(file: any) {
    this.error = null;
    this.loading = true;

    try {
      const msg = await this.imageFireSvc.validateImage(file);
      if (msg) {
        this.error = { code: 'IMAGE ERROR', message: msg }
        this.loading = false;
        return;
      }

    } catch (error: any) {
      this.error = error;
      this.loading = false;
    }

    try {
      const uploadedImage = await this.imageFireSvc.uploadImage(file.name, file, false, this.authSvc.getCurrentUserId());
      this.imagesFiles = [uploadedImage, ...this.imagesFiles];

      this.loading = false;
    } catch (error: any) {
      this.error = error;
      this.loading = false;
    }
  }

  public async refreshFiles(append: boolean = false) {
    this.error = null;
    this.loading = true;

    try {
      const listResult = await this.imageFireSvc.getImagesList('', PAGE_SIZE, this.nextPageToken, this.authSvc.getCurrentUserId())
      if (append && this.nextPageToken) {
        this.imagesFiles = [...this.imagesFiles, ...listResult.imageFiles];
      } else {
        this.imagesFiles = [...listResult.imageFiles]
      }

      this.nextPageToken = listResult.nextPageToken;
      this.loading = false;
    } catch (error: any) {
      this.imagesFiles = [];
      this.nextPageToken = null;
      this.error = error;
      this.loading = false;
    }
  }

  ngOnInit(): void {
    this.refreshFiles();
  }

  public selectClick(event: any, imageFIle: ImageFileInfo): void {
    event.preventDefault();
    this.selectedImage = imageFIle;
    this.selected.emit(imageFIle);
  }

  public loadMoreClick(event: any) {
    event.preventDefault();
    this.refreshFiles(true);
  }

  public refreshClick(event: any) {
    event.preventDefault();
    this.refreshFiles();
  }

  public deleteClick(event: any, imageFIle: ImageFileInfo): void {
    event.preventDefault();
    this.deleteImageFile(imageFIle);
  }

  public previewClick(event: any, imageFIle: ImageFileInfo): void {
    event.preventDefault();
    this.loadingPreview = true;
    this.imageFireSvc.getImageUrl(imageFIle.name, this.authSvc.getCurrentUserId()).then(url => {
      imageFIle.downloadUrl = url
      this.loadingPreview = false;
    });
  }

  public onFileChange(event: any) {
    this.choosenFileName = '';
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.choosenFileName = file.name;
      this.uploadImageFile(file);
    }
  }
}
