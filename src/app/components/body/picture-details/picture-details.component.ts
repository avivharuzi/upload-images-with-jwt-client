import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../../services/image/image.service';

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent implements OnInit {
  public imageDetails: any[];
  public imageName: string;
  public image: any;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public imageService: ImageService
  ) {
    this.imageDetails = new Array<any>();
  }

  ngOnInit() {
    this.checkImage();
  }

  checkImage() {
    this.activatedRoute.params.subscribe(params => this.imageName = params.image);
    this.imageService.getImageDetails(this.imageName).subscribe((res) => {
      this.imageDetails = res.clarifai;
      this.image = res.image;
    }, (err) => {
      this.router.navigate(['404']);
    });
  }

  deleteImage() {
    this.imageService.deleteImage(this.image._id).subscribe((res) => {
      if (res) {
        this.router.navigate(['/']);
      }
    });
  }
}
