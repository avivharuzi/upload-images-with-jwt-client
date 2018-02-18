import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IMAGES_URL, IMAGE_DETAILS, IMAGE_LIKES } from '../../constants/urls';
import { LoginService } from '../login/login.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ImageService {
  public headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) {
    this.headers = new HttpHeaders(`authorization:${this.loginService.token}`);
  }

  getImages(): Observable<any> {
    return this.http.get(IMAGES_URL, { headers: this.headers }).map((res: any) => {
      return res;
    })
    .catch(error => Observable.throw(error));
  }

  getImageDetails(id): Observable<any> {
    return this.http.get(IMAGE_DETAILS + '/' + id, { headers: this.headers }).map((res: any) => {
      return res;
    })
    .catch(error => Observable.throw(error));
  }

  increaseLikeToImage(id): Observable<any> {
    return this.http.put(IMAGE_LIKES + '/' +  id, null, { headers: this.headers }).map((res: any) => {
      return res;
    })
    .catch(error => Observable.throw(error));
  }

  deleteImage(id): Observable<any> {
    return this.http.delete(IMAGES_URL + '/' +  id, { headers: this.headers }).map((res: any) => {
      return res;
    })
    .catch(error => Observable.throw(error));
  }
}
