import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Config} from '../configuration/Config';
import {Pending} from '../model/Pending';

@Injectable()
export class PendingService {
  constructor(private http: HttpClient) {}

  pending(mail: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'));

    const url = Config.getPendingUrl(mail);
    return this.http.get<string[]>(url, {headers});
  }

  accept(mail: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'));

    const url = Config.getAcceptUrl(mail);
    return this.http.get(url, {headers});
  }

  numberOfPendings(mail: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'));

    const url = Config.getNumberOfPendingsUrl(mail);
    return this.http.get(url, {headers});
  }

}
