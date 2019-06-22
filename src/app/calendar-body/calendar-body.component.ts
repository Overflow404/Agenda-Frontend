import {Component, Input, OnInit} from '@angular/core';
import {DateManager} from '../date/DateManager';
import {DataService} from '../data.service';

@Component({
  selector: 'app-calendar-body',
  templateUrl: './calendar-body.component.html',
  styleUrls: ['./calendar-body.component.css']
})
export class CalendarBodyComponent implements OnInit {

  @Input() private currentDate: Date;
  @Input() private columns: number;
  private dates: Date[];

  constructor(private dateManager: DateManager,
              private data: DataService) {
  }

  ngOnInit() {
    this.subscribeOnViewChange();
  }

  private subscribeOnViewChange() {
    this.data.currentDate.subscribe(date => {
      this.clearAgenda();
      this.setAgendaDate(date);
      this.fillAgenda();
    });
  }

  private clearAgenda() {
    this.dates = [];
  }

  private setAgendaDate(date: Date) {
    this.date = date;
  }

  private fillAgenda() {
    const firstDayOfMonth = DateManager.firstDayOfMonth(this.date);
    const daysToMonday = DateManager.daysToMonday(firstDayOfMonth);
    const startDayToDisplayInAgenda = firstDayOfMonth.getDate() - daysToMonday;

    const lastDayOfMonth = DateManager.lastDayOfMonth(this.date);
    const daysToSunday = DateManager.daysToSunday(lastDayOfMonth);
    const lastDayToDisplayInAgenda = lastDayOfMonth.getDate() + daysToSunday;

    const month = this.date.getMonth();
    const year = this.date.getFullYear();

    for (let day = startDayToDisplayInAgenda; day <= lastDayToDisplayInAgenda; day++) {
      this.dates.push(new Date(year, month, day));
    }
  }

  get date(): Date {
    return this.currentDate;
  }

  set date(value: Date) {
    this.currentDate = value;
  }
}
