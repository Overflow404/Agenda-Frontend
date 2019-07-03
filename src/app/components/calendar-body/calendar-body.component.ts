import {Component, Input, OnInit} from '@angular/core';
import {DateManager} from '../../date/DateManager';
import {CalendarHeaderToBodyCoordinator} from '../../coordinator/CalendarHeaderToBodyCoordinator';
import {CellContent} from '../../model/CellContent';
import {PendingService} from '../../service/PendingService';

@Component({
  selector: 'app-calendar-body',
  templateUrl: './calendar-body.component.html',
  styleUrls: ['./calendar-body.component.css']
})
export class CalendarBodyComponent implements OnInit {

  @Input() private currentDate: Date;
  @Input() private columns: number;
  private content: CellContent[];

  constructor(private coordinator: CalendarHeaderToBodyCoordinator,
              private pendingService: PendingService) {
  }

  ngOnInit() {
    this.onMonthChange();
    this.retrieveNotifications();
  }

  private onMonthChange() {
    this.coordinator.currentDate.subscribe(date => {
      this.clearAgenda();
      this.setAgendaDate(date);
      this.fillAgenda();
    });
  }

  private clearAgenda() {
    this.content = [];
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
      if (DateManager.isADayOfCurrentMonth(this.date, day)) {
        this.content.push(new CellContent(new Date(year, month, day), true, []));
      } else {
        this.content.push(new CellContent(new Date(year, month, day), false, []));
      }
    }
  }

  get date(): Date {
    return this.currentDate;
  }

  set date(value: Date) {
    this.currentDate = value;
  }

  private retrieveNotifications() {
    const user = localStorage.getItem('user');
    const mail = JSON.parse(user).email;
    this.pendingService.numberOfPendings(mail).subscribe(
      (res: number) => this.onViewResult(res),
      error => this.OnViewError(error));
  }

  private onViewResult(res: number) {
    this.coordinator.setNumberOfNotifications(res);
  }

  private OnViewError(error: any) {

  }
}
