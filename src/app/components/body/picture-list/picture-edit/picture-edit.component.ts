import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageService } from '../../../../services/image/image.service';

@Component({
  selector: 'app-picture-edit',
  templateUrl: './picture-edit.component.html',
  styleUrls: ['./picture-edit.component.css']
})
export class PictureEditComponent implements OnInit {
  @Input()
  public likes: number;
  @Input()
  public id: any;
  @Output()
  public deleteImageAction: EventEmitter<any>;

  constructor(
    public imageService: ImageService
  ) {
    this.deleteImageAction = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  increaseLike() {
    this.imageService.increaseLikeToImage(this.id).subscribe((res) => {
      if (res) {
        this.likes++;
      }
    });
  }

  deleteImage() {
    this.deleteImageAction.emit(this.id);
  }
}
