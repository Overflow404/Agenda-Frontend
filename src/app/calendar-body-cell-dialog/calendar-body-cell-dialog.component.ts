import {Component,  OnInit} from '@angular/core';
import {DateManager} from '../date/DateManager';
import {NgxMaterialTimepickerComponent} from 'ngx-material-timepicker';
import {HttpClient} from '@angular/common/http';
import {Dates} from '../dates';
@Component({
  selector: 'app-calendar-body-cell-dialog',
  templateUrl: './calendar-body-cell-dialog.component.html',
  styleUrls: ['./calendar-body-cell-dialog.component.css']
})
export class CalendarBodyCellDialogComponent implements OnInit {

  date: Date;
  fullStartDate: Date;
  fullEndDate: Date;
  disableDatePickers = false;
  subject: string;
  startDate: Date;
  endDate: Date;
  url = 'http://localhost:3000/dates/';
  constructor(private dateManager: DateManager,
              private http: HttpClient) { }

  ngOnInit() {
  }

  onSlideChange() {
    this.disableDatePickers = !this.disableDatePickers;
  }

  onStartDateSelected(startTime: NgxMaterialTimepickerComponent) {
    this.startDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(),
      startTime.selectedHour.time, startTime.selectedMinute.time);
    this.fullStartDate = this.startDate;
  }

  onEndDateSelected(endTime: NgxMaterialTimepickerComponent) {
    this.endDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(),
      endTime.selectedHour.time, endTime.selectedMinute.time);
    this.fullEndDate = this.endDate;
  }

  book() {
    const key = this.dateManager.mergeDatesToJSON(this.fullStartDate, this.fullEndDate);
    this.getDates(key).subscribe((next: Dates[]) => {
      next.forEach((data: Dates) => {
        alert(data.id);
      }, () => {
        alert(('error'));
      });
    });
  }

  getDates(date: string) {
    return this.http.get(this.url + date);
  }



}
