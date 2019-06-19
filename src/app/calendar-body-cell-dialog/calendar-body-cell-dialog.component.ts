import {Component,  OnInit} from '@angular/core';
import {DateManager} from '../date/DateManager';
import {NgxMaterialTimepickerComponent} from 'ngx-material-timepicker';

@Component({
  selector: 'app-calendar-body-cell-dialog',
  templateUrl: './calendar-body-cell-dialog.component.html',
  styleUrls: ['./calendar-body-cell-dialog.component.css']
})
export class CalendarBodyCellDialogComponent implements OnInit {

  date: Date;
  disableDatePickers = false;
  subject: string;
  startDate: string;
  endDate: string;

  constructor(private dateManager: DateManager) { }

  ngOnInit() {
  }

  onSlideChange() {
    this.disableDatePickers = !this.disableDatePickers;
  }

  onStartDateSelected(startTime: NgxMaterialTimepickerComponent) {
    const startDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(),
      startTime.selectedHour.time, startTime.selectedMinute.time);
    alert(startDate.toJSON());
  }

  onEndDateSelected(endTime: NgxMaterialTimepickerComponent) {
    const endDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(),
      endTime.selectedHour.time, endTime.selectedMinute.time);
  }
}
