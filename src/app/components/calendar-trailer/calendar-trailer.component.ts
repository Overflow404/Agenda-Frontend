import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CalendarToolbarToHomeToolbarCoordinator} from '../../coordinator/CalendarToolbarToHomeToolbarCoordinator';

@Component({
  selector: 'app-calendar-trailer',
  templateUrl: './calendar-trailer.component.html',
  styleUrls: ['./calendar-trailer.component.css']
})
export class CalendarTrailerComponent implements OnInit {

  constructor(private status: CalendarToolbarToHomeToolbarCoordinator,
              private router: Router) { }

  ngOnInit() {
  }

  logout() {
    /*this.status.changeStatus(false);*/
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('/login');
  }
}
