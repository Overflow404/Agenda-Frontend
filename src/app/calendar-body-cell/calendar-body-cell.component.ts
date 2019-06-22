import {Component, Input, OnInit} from '@angular/core';
import {DateManager} from '../date/DateManager';
import {MatDialog} from '@angular/material';
import {CalendarBodyCellDialogComponent} from '../calendar-body-cell-dialog/calendar-body-cell-dialog.component';

@Component({
  selector: 'app-calendar-body-cell',
  templateUrl: './calendar-body-cell.component.html',
  styleUrls: ['./calendar-body-cell.component.css']
})

export class CalendarBodyCellComponent implements OnInit {

  @Input() private currentDate: Date;
  @Input() private enabled: boolean;

  constructor(private dateManager: DateManager,
              public dialog: MatDialog) {
  }

  ngOnInit() {

  }

  private doubleClickCallback() {
    const dialogRef = this.dialog.open(CalendarBodyCellDialogComponent);
    const instance = dialogRef.componentInstance;
    instance.date = this.date;
  }

  get date(): Date {
    return this.currentDate;
  }

  set date(value: Date) {
    this.currentDate = value;
  }
}

