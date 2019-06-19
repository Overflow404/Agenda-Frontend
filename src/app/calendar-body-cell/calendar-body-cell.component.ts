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

  @Input() date: Date;

  constructor(private dateManager: DateManager,
              public dialog: MatDialog) {
  }

  ngOnInit() {

  }

  getWeekDayFromNumber(day: number) {
    return this.dateManager.getWeekdayNameByDay(day);
  }

  doubleClickCallback() {
    const dialogRef = this.dialog.open(CalendarBodyCellDialogComponent);
    const instance = dialogRef.componentInstance;
    instance.date = this.date;

    dialogRef.afterClosed().subscribe(result => {
      /*alert('Closed');*/
    });
  }
}
