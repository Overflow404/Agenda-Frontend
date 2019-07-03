import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {ToolbarService} from '../../service/ToolbarService';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})

export class CalendarComponent implements OnInit {
  private currentDate: Date;

  constructor(private snackBar: MatSnackBar,
              private router: Router,
              private toolbar: ToolbarService) {

    const token = localStorage.getItem('jwt');
    if (token === null) {
      this.router.navigateByUrl('/login');
      this.snackBar.open('Please log in!', 'X');
    } else {
      this.date = new Date(Date.now());
    }
  }

  ngOnInit() {
   this.toolbar.hide();
  }

  get date(): Date {
    return this.currentDate;
  }

  set date(value: Date) {
    this.currentDate = value;
  }

}
