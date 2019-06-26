import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {CalendarBodyCellDialogComponent} from '../calendar-body-cell-dialog/calendar-body-cell-dialog.component';
import {Booking} from '../../model/Booking';
import {BookingService} from '../../service/BookingService';
import {DateManager} from '../../date/DateManager';
import {CalendarShowDetailsDialogComponent} from '../calendar-show-details-dialog/calendar-show-details-dialog.component';

@Component({
  selector: 'app-calendar-body-cell',
  templateUrl: './calendar-body-cell.component.html',
  styleUrls: ['./calendar-body-cell.component.css']
})

export class CalendarBodyCellComponent implements OnInit {

  @Input() private currentDate: Date;
  @Input() private enabled: boolean;
  private chipsList;

  constructor(private bookingService: BookingService,
              private dateManager: DateManager,
              private snackBar: MatSnackBar,
              public dialog: MatDialog) {
    this.chipsList = [];
  }

  ngOnInit() {
    this.getBookingsForCurrentDay().subscribe(
      result => { this.onViewResult(result); },
      error => { this.onViewError(error); }
    );
  }

  private getBookingsForCurrentDay() {
      return this.bookingService.retrieveBookings(this.date);
  }

  private onViewResult(result: Booking[]) {
    result.forEach(booking => {
      this.chipsList.push(booking);
    });

  }

  private onViewError(error) {
    this.snackBar.open('Error: ' + error.statusText, 'X');
  }

  private doubleClickCallback() {
    const dialogRef = this.dialog.open(CalendarBodyCellDialogComponent);
    const instance = dialogRef.componentInstance;
    instance.date = this.date;
    dialogRef.afterClosed().subscribe(() => {

      if (instance.booking !== undefined) {
        this.chipsList.push(instance.booking);
      }
    });
  }

  get date(): Date {
    return this.currentDate;
  }

  set date(value: Date) {
    this.currentDate = value;
  }

  showDetails(chip) {
    const dialogRef = this.dialog.open(CalendarShowDetailsDialogComponent);
    const instance = dialogRef.componentInstance;
    instance.date = this.date;
    instance.content = chip;
  }
}

