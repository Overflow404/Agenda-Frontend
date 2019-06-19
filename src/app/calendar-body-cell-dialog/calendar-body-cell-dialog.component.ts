import {Component,  OnInit} from '@angular/core';
import {DateManager} from '../date/DateManager';

@Component({
  selector: 'app-calendar-body-cell-dialog',
  templateUrl: './calendar-body-cell-dialog.component.html',
  styleUrls: ['./calendar-body-cell-dialog.component.css']
})
export class CalendarBodyCellDialogComponent implements OnInit {

  date: Date;
  disableDatePickers = false;

  constructor(private dateManager: DateManager) { }

  ngOnInit() {
  }

  onSlideChange() {
    this.disableDatePickers = !this.disableDatePickers;
  }
}
