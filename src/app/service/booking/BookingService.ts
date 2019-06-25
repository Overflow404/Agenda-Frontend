import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '../Response';
import {Booking} from '../../model/booking/Booking';

@Injectable()
export class BookingService {
  constructor(private http: HttpClient) { }

  book(booking: Booking) {
    const url =
      `http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/date/book?subject=${booking.subject}&description=${booking.description}&startDate=${booking.start}&endDate=${booking.end}`;
    return this.http.get<Response>(url);
  }

  retrieveBookings(date: Date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const url = `http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/date/retrieve?day=${day}&month=${month}&year=${year}`;
    return this.http.get<Response>(url);
  }

}
