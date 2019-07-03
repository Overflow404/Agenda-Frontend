import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Booking} from '../model/Booking';
import {Config} from '../configuration/Config';

@Injectable()
export class BookingService {
  constructor(private http: HttpClient) {}

  book(booking: Booking) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'));

    const email = JSON.parse(localStorage.getItem('user')).email;
    const url = Config.getBookingUrl(booking, email);

    return this.http.get(url, {headers});
  }

  retrieveBookings(date: Date) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'));

    const email = JSON.parse(localStorage.getItem('user')).email;
    const url = Config.getRetrieveBookingsUrl(date, email);

    return this.http.get<Booking[]>(url, {headers});
  }

}
