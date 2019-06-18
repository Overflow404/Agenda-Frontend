import {Component, Input, OnInit} from '@angular/core';
import {DateManager} from '../date/DateManager';

@Component({
  selector: 'app-calendar-body-cell',
  templateUrl: './calendar-body-cell.component.html',
  styleUrls: ['./calendar-body-cell.component.css']
})
export class CalendarBodyCellComponent implements OnInit {

  @Input() date: Date;


  constructor(private dateManager: DateManager) {
  }

  ngOnInit() {

  }

  getWeekDayFromNumber(day: number) {
    return this.dateManager.getWeekdayNameByDay(day);
  }

}
