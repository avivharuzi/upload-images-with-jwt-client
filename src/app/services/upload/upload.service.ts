import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IMAGES_URL } from '../../constants/urls';
import { AuthService } from './../auth/auth.service';;
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UploadService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  uploadImages(images: File[]): Observable<any> {
    const fd: FormData = new FormData();

    for (let image of images) {
      fd.append('images', image);
    }

    return this.http.post(IMAGES_URL, fd).map((res: any) => {
      return res;
    })
    .catch((err: HttpErrorResponse) => Observable.throw(err));
  }
}
