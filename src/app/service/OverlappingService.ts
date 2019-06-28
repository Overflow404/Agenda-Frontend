import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Config} from '../configuration/Config';

@Injectable()
export class OverlappingService {
  constructor(private http: HttpClient) {}

  checkIfSlotIsFree(startDate: number, endDate: number) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'));

    const url = Config.getOverlappingUrl(startDate, endDate);
    return this.http.get(url, {headers});
  }

}
