import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})


export class CalendarComponent implements OnInit {
  dateNow: Date;

  constructor() {
    this.dateNow = new Date(Date.now());
  }

  ngOnInit() {

  }

}
