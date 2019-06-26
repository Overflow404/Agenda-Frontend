import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from '../service/RegistrationService';
import {User} from '../model/User';
import {MatSnackBar} from '@angular/material';
import HTTP_STATUS_CODES from 'http-status-enum';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  registrationForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    gmt: new FormControl('', Validators.required)});

  constructor(private registrationService: RegistrationService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onFormSubmit() {
    const {firstName, lastName, email, password, gmt} = this.registrationForm.value;
    const user = new User(firstName, lastName, email, password, gmt);
    this.registrationService.register(user).subscribe(
      () => this.onViewResult(),
        error => this.OnViewError(error));
  }

  private onViewResult() {
    this.snackBar.open('Successful registration!', 'X');

  }

  private OnViewError(error) {
    const status = error.status;

    switch (status) {
      case HTTP_STATUS_CODES.CONFLICT:
        this.snackBar.open('Email already taken!', 'X');
        break;

      case HTTP_STATUS_CODES.PARTIAL_CONTENT:
        this.snackBar.open('Null or empty fields!', 'X');
        break;

      default:
        this.snackBar.open('Unkown error ' + status + '!', 'X');
        break;
    }
  }
}
