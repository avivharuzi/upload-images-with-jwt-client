import { RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IMAGES_URL } from '../../constants/urls';
import { AuthService } from './../auth/auth.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UploadService {
  public headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.headers = new HttpHeaders(`authorization:${this.authService.token}`);
  }

  uploadImages(images: File[]): Observable<any> {
    const fd: FormData = new FormData();

    for (let image of images) {
      fd.append('images', image);
    }

    return this.http.post(IMAGES_URL, fd, { headers: this.headers }).map((res: any) => {
      return res;
    })
    .catch(err => Observable.throw(err));
  }
}
