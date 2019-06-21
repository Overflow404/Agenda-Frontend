import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {OverlappingResult} from './OverlappingResult';

@Injectable()
export class OverlappingService {
  constructor(private http: HttpClient) { }

  checkIfSlotIsFree(startDate: number, endDate: number) {
    const url = `http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/date/overlapping?startDate=${startDate}&endDate=${endDate}`;
    return this.http.get<OverlappingResult>(url);
  }


}
