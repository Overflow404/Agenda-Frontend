import {Component, Input, OnInit} from '@angular/core';
import {DateManager} from '../date/DateManager';
import {DataService} from '../data.service';

@Component({
  selector: 'app-calendar-body',
  templateUrl: './calendar-body.component.html',
  styleUrls: ['./calendar-body.component.css']
})
export class CalendarBodyComponent implements OnInit {

  @Input() dateNow: Date;
  dates: Date[];

  constructor(private dateManager: DateManager,
              private data: DataService) {
  }

  ngOnInit() {
    this.data.currentDate.subscribe(date => {
      this.clearCalendar(date);

      const firstDayOfMonth = this.dateManager.getFirstDayOfMonth(this.dateNow);
      const daysToMonday = this.dateManager.daysToMonday(firstDayOfMonth);

      const lastDayOfMonth = this.dateManager.getLastDayOfMonth(this.dateNow);
      const daysToSunday = this.dateManager.daysToSunday(lastDayOfMonth);

      const currentMonth = this.dateNow.getMonth();
      const currentYear = this.dateNow.getFullYear();

      for (let currentDay = firstDayOfMonth.getDate() - daysToMonday;
           currentDay <= lastDayOfMonth.getDate() + daysToSunday; currentDay++) {
        this.dates.push(new Date(currentYear, currentMonth, currentDay));
      }
    });
  }

  clearCalendar(date: Date) {
    this.dates = [];
    this.dateNow = date;
  }

}
