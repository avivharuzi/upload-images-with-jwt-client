import { Component, OnInit, Input } from '@angular/core';
import { IMAGES_PATH } from '../../../../constants/urls';

@Component({
  selector: 'app-picture-item',
  templateUrl: './picture-item.component.html',
  styleUrls: ['./picture-item.component.css']
})
export class PictureItemComponent implements OnInit {
  @Input()
  public image: any;
  public path: string;

  constructor() { }

  ngOnInit() {
    this.path = IMAGES_PATH;
  }

}
