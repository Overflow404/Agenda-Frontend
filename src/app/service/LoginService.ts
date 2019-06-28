import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders,
} from '@angular/common/http';

import {User} from '../model/User';
import {Config} from '../configuration/Config';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: User) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'));

    const url = Config.getLoginUrl();
    return this.http.post(url, user, {headers});
  }

}
