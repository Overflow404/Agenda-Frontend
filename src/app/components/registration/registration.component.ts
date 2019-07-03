import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {RegistrationService} from '../../service/RegistrationService';
import {User} from '../../model/User';
import {MatSnackBar} from '@angular/material';
import HTTP_STATUS_CODES from 'http-status-enum';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {ToolbarService} from '../../service/ToolbarService';
import {gmtValidator} from '../../validator/GmtValidator';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {

  registrationForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    gmt: new FormControl('', [Validators.compose([Validators.required, gmtValidator])]),
    group: new FormControl(''),
    owner: new FormControl(false)
  });

  constructor(private registrationService: RegistrationService,
              private snackBar: MatSnackBar,
              private router: Router,
              private jwtHelper: JwtHelperService,
              private toolbar: ToolbarService) {
  }

  ngOnInit() {
    this.toolbar.show();
    const token = localStorage.getItem('jwt');
    if (token !== null) {
      if (!this.jwtHelper.isTokenExpired(token)) {
        this.router.navigateByUrl('/calendar');
      }
    }
  }

  onFormSubmit() {
    const {firstName, lastName, email, password, gmt, group, owner} = this.registrationForm.value;
    const user = new User(firstName, lastName, email, password, gmt, group, owner);
    this.registrationService.register(user).subscribe(
      () => this.onRegistrationResult(),
      error => this.OnViewError(error));
  }

  private onRegistrationResult() {
    this.snackBar.open('Successful registration!', 'X');
    this.router.navigateByUrl('/login');
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
        this.snackBar.open('Unknown error ' + status + '!', 'X');
        break;
    }
  }


}
