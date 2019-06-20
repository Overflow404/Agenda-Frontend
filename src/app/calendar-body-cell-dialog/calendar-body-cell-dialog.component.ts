import {Component, OnInit} from '@angular/core';
import {DateManager} from '../date/DateManager';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DateErrorMatcher} from '../error/DateErrorMatcher';
import {BookingService} from '../service/BookingService';

@Component({
  selector: 'app-calendar-body-cell-dialog',
  templateUrl: './calendar-body-cell-dialog.component.html',
  styleUrls: ['./calendar-body-cell-dialog.component.css']
})
export class CalendarBodyCellDialogComponent implements OnInit {

  /* Can't be private because in calendar-body-cell.component.ts there's
  * an access with instance.currentDate. */
  currentDate: Date;

  private bookingForm = new FormGroup({
    subject: new FormControl('', Validators.required),
    description: new FormControl(),
    startTime: new FormControl(this.currentDate, Validators.required),
    endTime: new FormControl(this.currentDate, Validators.required)
  });

  private matcher;

  constructor(private dateManager: DateManager,
              private bookingService: BookingService) {
    this.matcher = new DateErrorMatcher();
  }

  ngOnInit() {
  }

  onFormSubmit() {
    const {subject, description, startTime, endTime} = this.bookingForm.value;

    const startTimeParts = startTime.split(':');
    const endTimeParts = endTime.split(':');

    const startDate = new Date(this.currentDate).setHours(startTimeParts[0], startTimeParts[1]);
    const endDate = new Date(this.currentDate).setHours(endTimeParts[0], endTimeParts[1]);

    /* TODO Why if booking is a const, then stringify doesn't work?
    * TODO Think cause it's a const and when reassign e.g. description it doesn't work*/
    /*let booking = new Booking(subject, description, startDate, endDate);
    alert(JSON.stringify(booking));*/
/*    alert(this.bookingService.checkIfSlotIsFree(startDate, endDate));*/
    const observable = this.bookingService.checkIfSlotIsFree(startDate, endDate);
    observable
      .subscribe(() => alert('fatta'));
  }
}
