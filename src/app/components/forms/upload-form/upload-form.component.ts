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

  changeImages(event) {
    let fileList: FileList = event.target.files;
    this.images = new Array<File>();

    for (let i = 0; i < fileList.length; i++) {
      this.images.push(fileList.item(i));
    }
  }

  uploadImages() {
    this.uploadService.uploadImages(this.images).subscribe(res => {
      this.msg = res;
      this.newImages.emit(res.data);
    }, error => {
      this.msg = error.error;
    });
  }
}
