import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/User';
import {MatSnackBar} from '@angular/material';
import {LoginService} from '../../service/LoginService';
import HTTP_STATUS_CODES from 'http-status-enum';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {CalendarToolbarToHomeToolbarCoordinator} from '../../coordinator/CalendarToolbarToHomeToolbarCoordinator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)});

  constructor(private loginService: LoginService,
              private snackBar: MatSnackBar,
              private router: Router,
              private jwtHelper: JwtHelperService,
              private status: CalendarToolbarToHomeToolbarCoordinator) { }

  ngOnInit() {
    const token = localStorage.getItem('jwt');
    if (token !== null) {
      if (!this.jwtHelper.isTokenExpired(token)) {
        this.router.navigateByUrl('/calendar');
      } else {
      }
    }
    /*this.status.changeStatus(true);*/
  }

  onFormSubmit() {
    const {email, password} = this.loginForm.value;
    const user = new User(undefined, undefined, email, password, undefined, undefined, undefined);
    this.loginService.login(user).subscribe(
      (res) => this.onLoginResult(res),
      error => this.OnViewError(error));
  }

  private onLoginResult(res) {
    this.router.navigateByUrl('/calendar');
    localStorage.setItem('jwt', res.jwt);
    localStorage.setItem('group', res.group);
  }

  private OnViewError(error) {
    const status = error.status;
    switch (status) {
      case HTTP_STATUS_CODES.PARTIAL_CONTENT:
        this.snackBar.open('Null or empty fields!', 'X');
        break;
      case HTTP_STATUS_CODES.PRECONDITION_FAILED:
        this.snackBar.open(error.error, 'X');
        break;
      case HTTP_STATUS_CODES.ACCEPTED:
        this.router.navigateByUrl('/calendar');
        break;
      default:
        this.snackBar.open('Unkown errora ' + status + '!', 'X');
        break;
    }
  }
}
