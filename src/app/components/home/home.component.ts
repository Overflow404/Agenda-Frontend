import { Component, OnInit } from '@angular/core';
import {ToolbarService} from '../../service/ToolbarService';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public toolbar: ToolbarService) { }

  ngOnInit() {
    this.toolbar.show();
  }

}
