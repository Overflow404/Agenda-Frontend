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

  currentDate: Date;

  constructor(private data: DataService,
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
    this.data.currentDate.subscribe(date => { this.currentDate = date; });
  }
}
