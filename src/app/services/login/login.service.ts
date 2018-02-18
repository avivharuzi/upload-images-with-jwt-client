import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../../models/user.model';
import { LOGIN_URL } from './../../constants/urls';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  public token: string;
  public authorizationHeaders: any;

  constructor(
    private http: HttpClient
  ) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(user): Observable<any> {
    return this.http.post(LOGIN_URL, { user: user }).map((res: any) => {
      let token = res.data;
      if (token) {
        this.token = token;
        localStorage.setItem('currentUser', JSON.stringify({ usernName: user.userName, token: token }));
        return true;
      } else {
        return false;
      }
    }).catch(err => Observable.throw(err));
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
