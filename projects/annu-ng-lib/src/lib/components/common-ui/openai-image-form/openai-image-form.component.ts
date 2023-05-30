import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageFileInfo } from '../image-browser/image-browser.interface';
import { OpenaiService } from '../../../openai/openai.service';
import { ImageFireStoreService } from '../../../firebase/image-storage/image-fire-store.service';
import { OpenaiImageSize } from '../../../openai/openai.interface';
import { AuthFirebaseService } from '../../../firebase/auth/auth-firebase.service';
import { LibConfig } from '../../../app-config/app-config.interface';

@Component({
  selector: 'anu-openai-image-form',
  templateUrl: './openai-image-form.component.html',
  styleUrls: ['./openai-image-form.component.scss'],
})
export class OpenaiImageFormComponent {
  @Input() imagePromptText: string = '';
  @Input() imageFileName: string = '';
  @Output() fileUploaded = new EventEmitter<ImageFileInfo>();

  generatedBase64Image: string = '';
  savedImageUrl: string = '';
  loading: boolean = false;
  errorMsg: string = '';

  constructor(
    private openaiService: OpenaiService,
    private imageStoreService: ImageFireStoreService,
    private authService: AuthFirebaseService,
    private libConfig: LibConfig,
  ) {}

  public async generateImage(): Promise<void> {
    if (!this.imagePromptText.trim()) return;
    this.startLoading();
    try {
      [this.generatedBase64Image] = await this.openaiService.getImagetResponse(
        this.imagePromptText,
        1,
        OpenaiImageSize._1024x1024
      );
      this.stopLoading();
      return;
    } catch (err) {
      this.generatedBase64Image = '';
      this.stopLoading(err.message);
      return;
    }
  }

  public async uploadImage(): Promise<void> {
    if (!this.generatedBase64Image) return;
    this.startLoading();
    try {
      const imageFileInfo: ImageFileInfo =
        await this.imageStoreService.uploadImage(
          this.imageFileName,
          this.generatedBase64Image,
          true,
          this.authService.getCurrentUserId(),
          true
        );
        this.generatedBase64Image = '';
      this.savedImageUrl = `${this.libConfig.imagesSourceUrl}${imageFileInfo.fullPath}`;
      this.fileUploaded.emit(imageFileInfo);

      this.stopLoading();
      return;
    } catch (err) {
      this.stopLoading(err.message);
      return;
    }
  }

  private startLoading(): void {
    this.loading = true;
    this.errorMsg = '';
  }

  private stopLoading(err: string = ''): void {
    this.loading = false;
    this.errorMsg = err;
  }
}
