import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/User';
import {MatSnackBar} from '@angular/material';
import {LoginService} from '../../service/LoginService';
import HTTP_STATUS_CODES from 'http-status-enum';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {ToolbarService} from '../../service/ToolbarService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)});

  constructor(private loginService: LoginService,
              private snackBar: MatSnackBar,
              private router: Router,
              private jwtHelper: JwtHelperService,
              private toolbar: ToolbarService) { }

  ngOnInit() {
    this.toolbar.show();
    const token = localStorage.getItem('jwt');
    if (token !== null) {
      if (!this.jwtHelper.isTokenExpired(token)) {
        this.router.navigateByUrl('/calendar');
      } else {
      }
    }
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
    localStorage.setItem('user', res.user);
    this.toolbar.hide();
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
