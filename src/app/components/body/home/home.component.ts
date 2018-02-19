import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public images: any[];

  constructor(public imageService: ImageService) { }

  ngOnInit() {
    this.getImages();
  }

  getImages(): void {
    this.imageService.getImages().subscribe((res: any) => {
      this.images = res;
    }, err => {
      console.log(err);
    });
  }

  addNewImages(newImages: any): void {
    this.images = this.images.concat(newImages);
  }
}
