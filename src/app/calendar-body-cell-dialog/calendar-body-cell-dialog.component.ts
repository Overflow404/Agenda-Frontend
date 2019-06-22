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

  private bookingForm = new FormGroup({
    subject: new FormControl('', Validators.required),

    description: new FormControl(),
    startTime: new FormControl(this.date, [Validators.required, Validators.pattern(this.regex)]),
    endTime: new FormControl(this.date, [Validators.required, Validators.pattern(this.regex)])
  });

  private matcher;
  private overlappingResult: OverlappingResult;

  constructor(private dateManager: DateManager,
              private overlappingService: OverlappingService) {
    this.matcher = new DateErrorMatcher();
  }

  ngOnInit() {

  }

  onFormSubmit() {
    this.getData().subscribe((res: OverlappingResult) => {
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

  get form(): FormGroup {
    return this.bookingForm;
  }

  get regex(): string {
    return this.timeRegex;
  }

  get service(): OverlappingService {
    return this.overlappingService;
  }

  get result(): OverlappingResult {
    return this.overlappingResult;
  }

  getData() {
    const {subject, description, startTime, endTime} = this.bookingForm.value;
    const date = this.createSlot(startTime, endTime);
    return this.service.checkIfSlotIsFree(date.start, date.end);
  }
}
