import { Component, OnInit } from '@angular/core';
import {CalendarToolbarToHomeToolbarCoordinator} from '../../coordinator/CalendarToolbarToHomeToolbarCoordinator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private status: CalendarToolbarToHomeToolbarCoordinator) { }

  ngOnInit() {
    /*this.status.changeStatus(false);*/
  }

}
