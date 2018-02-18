import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../../../services/image/image.service';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {
  @Input()
  public images: any;

  constructor(public imageService: ImageService) { }

  ngOnInit() {
  }

  deleteImage(id) {
    this.imageService.deleteImage(id).subscribe((res) => {
      if (res.response) {
        for (let image of this.images) {
          if (image._id === id) {
            this.images.splice(this.images.indexOf(image), 1);
          }
        }
      }
    }, (err) => {
      console.log(err);
    });
  }
}
