import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';

import {User} from '../model/User';
import {Response} from './Response';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    const url = 'http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/date/register';

    const body = new FormData();
    body.append('firstName', user.firstName);
    body.append('lastName', user.lastName);
    body.append('email', user.email);
    body.append('password', user.password);
    body.append('gmt', user.gmt);

    return this.http.post<Response>(url, user);
  }

}
