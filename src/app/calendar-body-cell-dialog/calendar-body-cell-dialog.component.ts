import {Component,  OnInit} from '@angular/core';
import {DateManager} from '../date/DateManager';
import {NgxMaterialTimepickerComponent} from 'ngx-material-timepicker';

@Component({
  selector: 'app-calendar-body-cell-dialog',
  templateUrl: './calendar-body-cell-dialog.component.html',
  styleUrls: ['./calendar-body-cell-dialog.component.css']
})
export class CalendarBodyCellDialogComponent implements OnInit {

  /*Can't be private because in calendar-body-cell.component.ts there's
  * an access with instance.currentDate. */
  currentDate: Date;
  private disableTimePicker = false;
  private subject: string;
  private startDate: Date;
  private endDate: Date;
  constructor(private dateManager: DateManager) { }

  ngOnInit() {
  }

  private onSlideChange() {
    this.disableTimePicker = !this.disableTimePicker;
  }

  private onStartDateSelected(startTimePicker: NgxMaterialTimepickerComponent) {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const day = this.currentDate.getDate();
    const hour = startTimePicker.selectedHour.time;
    const minute = startTimePicker.selectedMinute.time;
    this.startDate = DateManager.createDate(year, month, day, hour, minute);
  }

  private onEndDateSelected(endTimePicker: NgxMaterialTimepickerComponent) {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const day = this.currentDate.getDate();
    const hour = endTimePicker.selectedHour.time;
    const minute = endTimePicker.selectedMinute.time;
    this.endDate = DateManager.createDate(year, month, day, hour, minute);
  }

  private book() {
    alert('Da inviare: [INIZIO]' + this.startDate + ' [FINE]' + this.endDate);
  }

}
