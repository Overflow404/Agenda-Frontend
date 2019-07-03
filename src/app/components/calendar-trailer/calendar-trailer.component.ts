import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToolbarService} from '../../service/ToolbarService';

@Component({
  selector: 'app-calendar-trailer',
  templateUrl: './calendar-trailer.component.html',
  styleUrls: ['./calendar-trailer.component.css']
})
export class CalendarTrailerComponent implements OnInit {

  constructor(private router: Router,
              private toolbar: ToolbarService) { }

  ngOnInit() {
  }

  logout() {
    this.toolbar.show();
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('/login');
  }
}
