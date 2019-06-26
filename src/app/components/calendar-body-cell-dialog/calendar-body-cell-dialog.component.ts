import {Component, OnInit} from '@angular/core';
import {DateManager} from '../../date/DateManager';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OverlappingService} from '../../service/OverlappingService';
import {MatSnackBar} from '@angular/material';
import {BookingService} from '../../service/BookingService';
import {Booking} from '../../model/Booking';
import HTTP_STATUS_CODES from 'http-status-enum';

@Component({
  selector: 'app-calendar-body-cell-dialog',
  templateUrl: './calendar-body-cell-dialog.component.html',
  styleUrls: ['./calendar-body-cell-dialog.component.css']
})

export class CalendarBodyCellDialogComponent implements OnInit {

  timeRegex = '^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$';
  currentDate: Date;
  private book: Booking;

  bookingForm = new FormGroup({
    subject: new FormControl('', Validators.required),
    description: new FormControl(),
    startTime: new FormControl(this.date, [Validators.required, Validators.pattern(this.regex)]),
    endTime: new FormControl(this.date, [Validators.required, Validators.pattern(this.regex)])
  }, Validators.required);

  private resp: Response;
  private wrongDatesOrder: boolean;

  constructor(private dateManager: DateManager,
              private overlappingService: OverlappingService,
              private bookingService: BookingService,
              private snackBar: MatSnackBar) {
    this.wrongDatesOrder = false;
  }

  ngOnInit() {

  }

  onFormSubmit() {
    this.getOverlappingData().subscribe(
      () => { this.onViewOverlappingResult(); },
      error => { this.onViewError(error); }
    );
  }

  getOverlappingData() {
    const {startTime, endTime} = this.bookingForm.value;
    const date = this.createSlot(startTime, endTime);
    return this.overlapService.checkIfSlotIsFree(date.start, date.end);
  }

  createSlot(startTime, endTime) {
    const startTimeParts = startTime.split(':');
    const endTimeParts = endTime.split(':');

    const startDate = new Date(this.date).setHours(startTimeParts[0], startTimeParts[1]);
    const endDate = new Date(this.date).setHours(endTimeParts[0], endTimeParts[1]);

    return {start: startDate, end: endDate};
  }

  private onViewOverlappingResult() {
    this.getBookingData().subscribe(
      (res) => { this.onViewBookingResult(res); },
      error => { this.onViewError(error); }
    );
  }

  private onViewError(error) {
    switch (error.status) {
      case HTTP_STATUS_CODES.CONFLICT:
        this.snackBar.open('This time slot is already booked!', 'X');
        break;
      case HTTP_STATUS_CODES.PARTIAL_CONTENT:
        this.snackBar.open('Empty or null fields!', 'X');
        break;
      case HTTP_STATUS_CODES.BAD_REQUEST:
        this.snackBar.open('End time is greater than start time!', 'X');
        break;
      default:
        this.snackBar.open('Unknown error: ' + error.status, 'X');
    }

  }


  getBookingData() {
    const {subject, description, startTime, endTime} = this.bookingForm.value;
    const date = this.createSlot(startTime, endTime);
    this.book = new Booking(subject, description, date.start, date.end);
    return this.bookService.book(this.book);
  }

  private onViewBookingResult(res) {
      this.snackBar.open('Booking confirmed!', 'X');
  }

  checkDatesOrder() {
    if (this.form.valid) {
      const {startTime, endTime} = this.bookingForm.value;
      const date = this.createSlot(startTime, endTime);
      if (date.start > date.end || date.start === date.end) {
        this.wrongDatesOrder = true;
        this.snackBar.open('Start date must be greater than end date!', 'X');
      } else {
        this.wrongDatesOrder = false;
      }
    }
  }

  get date(): Date {
    return this.currentDate;
  }

  set date(date: Date) {
    this.currentDate = date;
  }

  get form(): FormGroup {
    return this.bookingForm;
  }

  get regex(): string {
    return this.timeRegex;
  }

  get overlapService(): OverlappingService {
    return this.overlappingService;
  }

  get bookService(): BookingService {
    return this.bookingService;
  }

  get response(): Response {
    return this.resp;
  }

  set response(result: Response) {
    this.resp = result;
  }

  get booking() {
    return this.book;
  }
}
