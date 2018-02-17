import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IMAGES_URL } from '../../constants/urls';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UploadService {

  constructor(public http: HttpClient) { }

  uploadImages(images: File[]): Observable<any> {
    const fd: FormData = new FormData();

    for (let image of images) {
      fd.append('images', image);
    }

    return this.http.post(IMAGES_URL, fd).map((res) => {
      return res;
    })
    .catch(error => Observable.throw(error));
  }
}
