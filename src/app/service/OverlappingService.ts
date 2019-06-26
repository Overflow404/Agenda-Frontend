import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OverlappingService {
  constructor(private http: HttpClient) { }

  checkIfSlotIsFree(startDate: number, endDate: number) {
    const url = `http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/agenda/overlapping?startDate=${startDate}&endDate=${endDate}`;
    return this.http.get(url);
  }

}
