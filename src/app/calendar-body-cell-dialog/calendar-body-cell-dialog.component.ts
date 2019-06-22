import {Component, OnInit} from '@angular/core';
import {DateManager} from '../date/DateManager';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DateErrorMatcher} from '../error/DateErrorMatcher';
import {OverlappingService} from '../service/overlapping/OverlappingService';
import {OverlappingResult} from '../service/overlapping/OverlappingResult';

@Component({
  selector: 'app-calendar-body-cell-dialog',
  templateUrl: './calendar-body-cell-dialog.component.html',
  styleUrls: ['./calendar-body-cell-dialog.component.css']
})

export class CalendarBodyCellDialogComponent implements OnInit {

  private timeRegex = '^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$';
  private currentDate: Date;

  bookingForm = new FormGroup({
    subject: new FormControl('', Validators.required),

    description: new FormControl(),
    startTime: new FormControl(this.date, [Validators.required, Validators.pattern(this.timeRegex)]),
    endTime: new FormControl(this.date, [Validators.required, Validators.pattern(this.timeRegex)])
  });

  private matcher;
  overlappingResult: OverlappingResult;

  constructor(private dateManager: DateManager,
              private overlappingService: OverlappingService) {
    this.matcher = new DateErrorMatcher();
  }

  ngOnInit() {

  }

  onFormSubmit() {
    const {subject, description, startTime, endTime} = this.bookingForm.value;

    const date = this.createSlot(startTime, endTime);

    const observable =
      this.overlappingService.checkIfSlotIsFree(date.start, date.end);

    observable.subscribe((res: OverlappingResult) => {
      this.overlappingResult = res;
    });
  }

  createSlot(startTime, endTime) {
    const startTimeParts = startTime.split(':');
    const endTimeParts = endTime.split(':');

    const startDate = new Date(this.date).setHours(startTimeParts[0], startTimeParts[1]);
    const endDate = new Date(this.date).setHours(endTimeParts[0], endTimeParts[1]);

    return {start: startDate, end: endDate};
  }

  get date(): Date {
    return this.currentDate;
  }

  set date(value: Date) {
    this.currentDate = value;
  }
}
