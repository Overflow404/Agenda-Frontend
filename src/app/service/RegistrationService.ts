import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders,
} from '@angular/common/http';

import {User} from '../model/User';
import {Config} from '../configuration/Config';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'));

    const url = Config.getRegisterUrl();
    return this.http.post(url, user, {headers});
  }

}
