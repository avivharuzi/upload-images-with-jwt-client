import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IMAGES_URL, IMAGE_DETAILS, IMAGE_LIKES } from '../../constants/urls';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ImageService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getImages(): Observable<any> {
    return this.http.get(IMAGES_URL).map((res: any) => {
      return res;
    })
    .catch((err: HttpErrorResponse) => Observable.throw(err));
  }

  getImageDetails(id): Observable<any> {
    return this.http.get(IMAGE_DETAILS + '/' + id).map((res: any) => {
      return res;
    })
    .catch((err: HttpErrorResponse) => Observable.throw(err));
  }

  increaseLikeToImage(id): Observable<any> {
    return this.http.put(IMAGE_LIKES + '/' +  id, null).map((res: any) => {
      return res;
    })
    .catch((err: HttpErrorResponse) => Observable.throw(err));
  }

  deleteImage(id): Observable<any> {
    return this.http.delete(IMAGES_URL + '/' +  id).map((res: any) => {
      return res;
    })
    .catch((err: HttpErrorResponse) => Observable.throw(err));
  }
}
