import {Component, Injectable, OnInit} from '@angular/core';
import {DateManager} from '../../date/DateManager';
import {CalendarHeaderToBodyCoordinator} from '../../coordinator/CalendarHeaderToBodyCoordinator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.css']
})

@Injectable()
export class CalendarHeaderComponent implements OnInit {

  private currentDate: Date;

  constructor(private coordinator: CalendarHeaderToBodyCoordinator,
              private dateManager: DateManager,
              private router: Router) { }

  ngOnInit() {
    this.subscribeOnMonthChange();
  }

  previousMonth() {
    const date = this.coordinator.getData();
    this.coordinator.changeDate(DateManager.previousMonth(date));
  }

  nextMonth() {
    const date = this.coordinator.getData();
    this.coordinator.changeDate(DateManager.nextMonth(date));
  }

  private subscribeOnMonthChange() {
    this.coordinator.currentDate.subscribe(date => { this.date = date; });
  }

  get date(): Date {
    return this.currentDate;
  }

  set date(value: Date) {
    this.currentDate = value;
  }

  onViewPendingRequest() {
    this.router.navigateByUrl('/pending');
  }
}
