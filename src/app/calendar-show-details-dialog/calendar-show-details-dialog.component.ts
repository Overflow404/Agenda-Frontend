import { Component, OnInit } from '@angular/core';
import {DateManager} from '../date/DateManager';

@Component({
  selector: 'app-calendar-show-details-dialog',
  templateUrl: './calendar-show-details-dialog.component.html',
  styleUrls: ['./calendar-show-details-dialog.component.css']
})
export class CalendarShowDetailsDialogComponent implements OnInit {

  currentDate: Date;
  startDate: string;
  endDate: string;
  content: any;

  constructor(private dateManager: DateManager) { }

  ngOnInit() {
    const start = new Date(this.content.start);
    const end = new Date(this.content.end);

    this.startDate = this.extractTime(start);
    this.endDate = this.extractTime(end);
  }


  get date(): Date {
    return this.currentDate;
  }

  set date(date: Date) {
    this.currentDate = date;
  }

  extractTime(date: Date) {
    let hour;
    let minutes;

    if (date.getHours() < 10) {
      hour = '0' + date.getHours();
    } else {
      hour = date.getHours();
    }

    if (date.getMinutes() < 10) {
      minutes = '0' + date.getMinutes();
    } else {
      minutes = date.getMinutes();
    }

    return hour + ':' + minutes;
  }

}
