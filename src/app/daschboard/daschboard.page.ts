import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-daschboard',
  templateUrl: './daschboard.page.html',
  styleUrls: ['./daschboard.page.scss'],
})
export class DaschboardPage {

  imageSource: any;

  constructor(private domSanitizer: DomSanitizer) { }

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt,
        saveToGallery: true
      });

      this.imageSource = this.domSanitizer.bypassSecurityTrustUrl(image.webPath || '');

    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }

  getPhoto() {
    return this.imageSource;
  }

  onSearch(event: any) {
    const searchTerm = event.target.value;
    console.log(searchTerm);
  }
}
