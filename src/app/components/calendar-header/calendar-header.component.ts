import {Component, Injectable, OnInit} from '@angular/core';
import {DateManager} from '../../date/DateManager';
import {CalendarHeaderToBodyCoordinator} from '../../coordinator/CalendarHeaderToBodyCoordinator';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.css']
})

@Injectable()
export class CalendarHeaderComponent implements OnInit {

  private currentDate: Date;

  constructor(private data: CalendarHeaderToBodyCoordinator,
              private dateManager: DateManager) { }

  ngOnInit() {
    this.subscribeOnMonthChange();
  }

  previousMonth() {
    const date = this.data.getData();
    this.data.changeDate(DateManager.previousMonth(date));
  }

  nextMonth() {
    const date = this.data.getData();
    this.data.changeDate(DateManager.nextMonth(date));
  }

  private subscribeOnMonthChange() {
    this.data.currentDate.subscribe(date => { this.date = date; });
  }

  get date(): Date {
    return this.currentDate;
  }

  set date(value: Date) {
    this.currentDate = value;
  }
}
