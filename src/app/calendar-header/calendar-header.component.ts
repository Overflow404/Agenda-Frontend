import {Component, Injectable, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {DateManager} from '../date/DateManager';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.css']
})

@Injectable()
export class CalendarHeaderComponent implements OnInit {
  dateNow: Date;
  constructor(private data: DataService,
              private dateManager: DateManager) { }

  ngOnInit() {
    this.data.currentDate.subscribe(date => this.dateNow = date);
  }

  previous() {
    const date = this.data.getData();
    this.data.changeDate(this.dateManager.previousMonth(date));
  }

  next() {
    const date = this.data.getData();
    this.data.changeDate(this.dateManager.nextMonth(date));
  }
}
