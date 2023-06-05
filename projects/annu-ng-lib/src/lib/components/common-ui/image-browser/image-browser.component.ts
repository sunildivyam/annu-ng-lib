import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AuthFirebaseService } from '../../../firebase/auth';
import { ImageFireStoreService } from '../../../firebase/image-storage';
import { ImageFileInfo } from './image-browser.interface';
import { UtilsService } from '../../../services/utils/utils.service';
import { LibConfig } from '../../../app-config/app-config.interface';

const PAGE_SIZE = 30;

@Component({
  selector: 'anu-image-browser',
  templateUrl: './image-browser.component.html',
  styleUrls: ['./image-browser.component.scss'],
})
export class ImageBrowserComponent implements OnInit {
  @Input() selectedImage: ImageFileInfo = null;
  @Input() imageClassNames: Array<string> = [
    'col-sm-12',
    'col-md-4',
    'col-lg-4',
    'shadow',
    'spacing',
  ];
  @Input() pageSize: number = PAGE_SIZE;
  @Input() helpText: string = '';
  @Input() isSrcFromFirebase: boolean = false;  // if select images as Firebase storage download urls else API url
  @Output() selected: EventEmitter<ImageFileInfo> =
    new EventEmitter<ImageFileInfo>();
  @ViewChild('fileInput') fileEl: ElementRef;

  imagesFiles: Array<ImageFileInfo> = [];
  imagesFilesFiltered: Array<ImageFileInfo> = [];

  nextPageToken: any;
  error: any;
  loading: boolean = false;
  loadingPreview: Object = {};
  choosenFileName: string = '';

  constructor(
    private imageFireSvc: ImageFireStoreService,
    private authSvc: AuthFirebaseService,
    private utilsService: UtilsService,
    private libConfig: LibConfig,
  ) {}
  private refreshPreviewLoaders(imageFiles: Array<ImageFileInfo>) {
    this.loadingPreview = {};
    imageFiles?.forEach((imageFile) => {
      const imageLoaderKey = `${imageFile.fullPath}${imageFile.name}`;
      this.loadingPreview[imageLoaderKey] = false;
    });
  }

  private async deleteImageFile(imageFile: ImageFileInfo) {
    this.error = null;
    this.loading = true;

    try {
      await this.imageFireSvc.deleteImage(
        imageFile.name,
        this.authSvc.getCurrentUserId()
      );
      // Once deleted from firebase, remove from the local list too.
      this.imagesFiles = this.imagesFiles.filter(
        (imgFile) => imgFile.downloadUrl !== imageFile.downloadUrl
      );
      this.refreshPreviewLoaders(this.imagesFiles);
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
        this.error = { code: 'IMAGE ERROR', message: msg };
        this.loading = false;
        return;
      }
    } catch (error: any) {
      this.error = error;
      this.loading = false;
    }

    try {
      const uploadedImage = await this.imageFireSvc.uploadImage(
        file.name,
        file,
        false,
        this.authSvc.getCurrentUserId()
      );
      this.imagesFiles = [uploadedImage, ...this.imagesFiles];
      this.refreshPreviewLoaders(this.imagesFiles);
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
      const listResult = await this.imageFireSvc.getImagesList(
        '',
        this.pageSize,
        this.nextPageToken,
        this.authSvc.getCurrentUserId()
      );
      if (append && this.nextPageToken) {
        this.imagesFiles = [...this.imagesFiles, ...listResult.imageFiles];
      } else {
        this.imagesFiles = [...listResult.imageFiles];
      }
      this.refreshPreviewLoaders(this.imagesFiles);
      this.nextPageToken = listResult.nextPageToken;
      this.loading = false;
    } catch (error: any) {
      this.imagesFiles = [];
      this.refreshPreviewLoaders(this.imagesFiles);
      this.nextPageToken = null;
      this.error = error;
      this.loading = false;
    }
  }

  /**
   * Previews image by fetching download url from firebase.
   * @param imageFile
   * @returns
   */
  private async previewImageFile(
    imageFile: ImageFileInfo
  ): Promise<ImageFileInfo> {
    const imageLoaderKey = `${imageFile.fullPath}${imageFile.name}`;
    this.error = null;
    this.loadingPreview[imageLoaderKey] = true;

    try {
      if (this.isSrcFromFirebase) {
        imageFile.downloadUrl = await this.imageFireSvc.getImageUrl(
          imageFile.name,
          this.authSvc.getCurrentUserId()
        );
      } else {
        imageFile.downloadUrl = this.utilsService.getImageUrl(
          imageFile.fullPath,
          this.libConfig.imagesSourceUrl,
        );
      }

      this.loadingPreview[imageLoaderKey] = false;
      return imageFile;
    } catch (error: any) {
      this.error = error;
      this.loadingPreview[imageLoaderKey] = false;
      return null;
    }
  }

  ngOnInit(): void {
    this.refreshFiles();
  }

  public selectClick(event: any, imageFile: ImageFileInfo): void {
    event.preventDefault();
    if (!imageFile.downloadUrl) {
      this.previewImageFile(imageFile).then(() => {
        this.selectedImage = imageFile;
        this.selected.emit(imageFile);
      });
    } else {
      this.selectedImage = imageFile;
      this.selected.emit(imageFile);
    }
  }

  public loadMoreClick(event: any) {
    event.preventDefault();
    this.refreshFiles(true);
  }

  public refreshClick(event: any) {
    event.preventDefault();
    this.refreshFiles();
  }

  public deleteClick(event: any, imageFile: ImageFileInfo): void {
    event.preventDefault();
    this.deleteImageFile(imageFile);
  }

  public previewClick(event: any, imageFile: ImageFileInfo): void {
    event.preventDefault();
    this.previewImageFile(imageFile);
  }

  public onFileChange(event: any) {
    this.choosenFileName = '';
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.choosenFileName = file.name;
      this.uploadImageFile(file);
    }
  }

  public uploadClick(): void {
    const fileInputEl = this.fileEl.nativeElement;
    fileInputEl.value = '';
    this.choosenFileName = '';
    fileInputEl.click();
  }

  public onImageListFilter(imageFilesFiltered: Array<object>): void {
    this.imagesFilesFiltered = imageFilesFiltered as Array<ImageFileInfo>;
  }
}
