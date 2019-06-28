import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CalendarToolbarToHomeToolbarCoordinator {

  private statusSource = new BehaviorSubject(false);

  constructor() { }

  changeStatus(status: boolean) {
    this.statusSource.next(status);
  }

  getData() {
    return this.statusSource.getValue();
  }
}
