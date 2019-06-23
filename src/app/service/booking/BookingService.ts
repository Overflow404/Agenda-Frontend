import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '../Response';

@Injectable()
export class BookingService {
  constructor(private http: HttpClient) { }

  book(subject: string, description: string, startDate: number, endDate: number) {
    const url =
      `http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/date/book?subject=${subject}&description=${description}&startDate=${startDate}&endDate=${endDate}`;
    return this.http.get<Response>(url);
  }

}
