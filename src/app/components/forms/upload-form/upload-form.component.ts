import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UploadService } from '../../../services/upload/upload.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  @Output()
  public newImages: EventEmitter<any>;

  public images: File[];
  public msg: any;

  constructor(
    public uploadService: UploadService
  ) {
    this.newImages = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  changeImages(event): void {
    let fileList: FileList = event.target.files;
    this.images = new Array<File>();

    for (let i = 0; i < fileList.length; i++) {
      this.images.push(fileList.item(i));
    }
  }

  uploadImages(): void {
    if (this.images !== undefined && this.images.length) {
      this.uploadService.uploadImages(this.images).subscribe((res: any) => {
        this.msg = res;
        this.newImages.emit(res.data);
      }, err => {
        this.msg = err.error;
      });
    } else {
      this.msg = {
        errors: ['You need to choose at least one image']
      }
    }
  }
}
