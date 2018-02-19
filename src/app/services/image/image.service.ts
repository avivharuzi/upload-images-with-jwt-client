import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IMAGES_URL, IMAGE_DETAILS, IMAGE_LIKES } from '../../constants/urls';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ImageService {
  public headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.headers = new HttpHeaders(`authorization:${this.authService.token}`);
  }

  getImages(): Observable<any> {
    return this.http.get(IMAGES_URL, { headers: this.headers }).map((res: any) => {
      return res;
    })
    .catch(err => Observable.throw(err));
  }

  getImageDetails(id): Observable<any> {
    return this.http.get(IMAGE_DETAILS + '/' + id, { headers: this.headers }).map((res: any) => {
      return res;
    })
    .catch(err => Observable.throw(err));
  }

  increaseLikeToImage(id): Observable<any> {
    return this.http.put(IMAGE_LIKES + '/' +  id, null, { headers: this.headers }).map((res: any) => {
      return res;
    })
    .catch(err => Observable.throw(err));
  }

  deleteImage(id): Observable<any> {
    return this.http.delete(IMAGES_URL + '/' +  id, { headers: this.headers }).map((res: any) => {
      return res;
    })
    .catch(err => Observable.throw(err));
  }
}
