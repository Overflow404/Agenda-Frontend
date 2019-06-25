import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderBodyCoordinator {

  private dateSource = new BehaviorSubject(new Date(Date.now()));
  currentDate = this.dateSource.asObservable();

  constructor() { }

  changeDate(date: Date) {
    this.dateSource.next(date);
  }

  getData() {
    return this.dateSource.getValue();
  }
}
