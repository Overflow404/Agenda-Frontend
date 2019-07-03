import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CalendarHeaderToBodyCoordinator {

  private dateSource = new BehaviorSubject(new Date(Date.now()));
  currentDate = this.dateSource.asObservable();
  notifications: number;

  constructor() {
    this.notifications = 0;
  }

  changeDate(date: Date) {
    this.dateSource.next(date);
  }

  getData() {
    return this.dateSource.getValue();
  }


  setNumberOfNotifications(res: number) {
    this.notifications = res;
  }
}
