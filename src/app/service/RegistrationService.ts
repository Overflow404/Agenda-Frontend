import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';

import {User} from '../model/User';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    const url = 'http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/agenda/register';

    alert(JSON.stringify(user));

    return this.http.post(url, user);
  }

}
