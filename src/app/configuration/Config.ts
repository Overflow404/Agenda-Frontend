import {Booking} from '../model/Booking';

export class Config {

  static getBookingUrl(booking: Booking) {
    return `http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/agenda/book?subject=${booking.subject}&description=${booking.description}&startDate=${booking.start}&endDate=${booking.end}`;
  }

  static getRetrieveBookingsUrl(date: Date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/agenda/retrieve?day=${day}&month=${month}&year=${year}`;
  }

  static getOverlappingUrl(startDate: number, endDate: number) {
    return `http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/agenda/overlapping?startDate=${startDate}&endDate=${endDate}&groupName=${localStorage.getItem('group')}`;
  }

  static getRegisterUrl() {
    return 'http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/agenda/register';
  }

  static getLoginUrl() {
    return 'http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/agenda/login';
  }
}
