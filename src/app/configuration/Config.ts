import {Booking} from '../model/Booking';

export class Config {

  static getBookingUrl(booking: Booking, email: string) {
    return `http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/agenda/book?subject=${booking.subject}&description=${booking.description}&startDate=${booking.start}&endDate=${booking.end}&email=${email}`;
  }

  static getRetrieveBookingsUrl(date: Date, email: string) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/agenda/retrieve?day=${day}&month=${month}&year=${year}&email=${email}`;
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

  static getPendingUrl(email: string) {
    return `http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/agenda/pending?email=${email}`;
  }

  static getAcceptUrl(email: string) {
    const user = localStorage.getItem('user');
    const ownerMail = JSON.parse(user).email;
    return `http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/agenda/accept?toRemoveEmail=${email}&ownerEmail=${ownerMail}`;
  }

  static getNumberOfPendingsUrl(email: string) {
    const user = localStorage.getItem('user');
    const ownerMail = JSON.parse(user).email;
    return `http://localhost:8080/Agenda-1.0-SNAPSHOT/rest/agenda/pendingsnumber?ownerEmail=${ownerMail}`;
  }
}
