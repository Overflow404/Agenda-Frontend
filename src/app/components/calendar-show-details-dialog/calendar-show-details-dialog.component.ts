import { Component, OnInit } from '@angular/core';
import {DateManager} from '../../date/DateManager';

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

    this.startDate = DateManager.extractTime(start);
    this.endDate = DateManager.extractTime(end);
  }


  get date(): Date {
    return this.currentDate;
  }

  set date(date: Date) {
    this.currentDate = date;
  }

}
