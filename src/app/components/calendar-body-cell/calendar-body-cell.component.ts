import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {CalendarBodyCellDialogComponent} from '../calendar-body-cell-dialog/calendar-body-cell-dialog.component';
import {Booking} from '../../model/Booking';
import {BookingService} from '../../service/BookingService';
import {DateManager} from '../../date/DateManager';
import {CalendarShowDetailsDialogComponent} from '../calendar-show-details-dialog/calendar-show-details-dialog.component';
import {CellContent} from '../../model/CellContent';
import {Router} from '@angular/router';
import HTTP_STATUS_CODES from 'http-status-enum';

@Component({
  selector: 'app-calendar-body-cell',
  templateUrl: './calendar-body-cell.component.html',
  styleUrls: ['./calendar-body-cell.component.css']
})

export class CalendarBodyCellComponent implements OnInit {

  @Input() private cellContent: CellContent;
  private dialogRef;

  constructor(private bookingService: BookingService,
              private dateManager: DateManager,
              private router: Router,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getBookingsForCurrentDay().subscribe(
      result => {
        this.onViewResult(result);
      },
      (error) => {
        this.onViewError(error);
      }
    );
  }

  private getBookingsForCurrentDay() {
    return this.bookingService.retrieveBookings(this.date);
  }

  private onViewResult(result: Booking[]) {
    result.forEach(booking => {
      if (booking !== undefined) {
        this.cellContent.addChip(booking);
      }
    });

  }

  private onViewError(error) {
    switch (error.status) {
      case HTTP_STATUS_CODES.UNAUTHORIZED:
        this.snackBar.open('Login please!', 'X');
        this.router.navigateByUrl('/login');
        break;
      case HTTP_STATUS_CODES.PRECONDITION_FAILED:
        this.snackBar.open(error.error, 'X');
        break;
      default:
        this.snackBar.open('Unknown error: ' + error.status, 'X');
    }
  }

  private doubleClickCallback() {
    const dialogRef = this.dialog.open(CalendarBodyCellDialogComponent);
    const instance = dialogRef.componentInstance;
    instance.date = this.date;
    dialogRef.afterClosed().subscribe(() => {
      this.onViewResult([instance.booking]);
    });
  }

  showDetails(chip) {
    this.dialogRef = this.dialog.open(CalendarShowDetailsDialogComponent);
    const instance = this.dialogRef.componentInstance;
    instance.date = this.date;
    instance.content = chip;
  }

  get date(): Date {
    return this.cellContent.date;
  }

  set date(date: Date) {
    this.cellContent.date = date;
  }
}

