import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IMAGES_URL, IMAGE_DETAILS, IMAGE_LIKES } from '../../constants/urls';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ImageService {

  constructor(public http: HttpClient) { }

  getImages(): Observable<any> {
    return this.http.get(IMAGES_URL).map((res: any) => {
      return res;
    })
    .catch(error => Observable.throw(error));
  }

  getImageDetails(id): Observable<any> {
    return this.http.get(IMAGE_DETAILS + '/' + id).map((res: any) => {
      return res;
    })
    .catch(error => Observable.throw(error));
  }

  increaseLikeToImage(id): Observable<any> {
    return this.http.put(IMAGE_LIKES + '/' +  id, null).map((res: any) => {
      return res;
    })
    .catch(error => Observable.throw(error));
  }

  deleteImage(id): Observable<any> {
    return this.http.delete(IMAGES_URL + '/' +  id).map((res: any) => {
      return res;
    })
    .catch(error => Observable.throw(error));
  }
}
