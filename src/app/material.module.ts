import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatLabel,
  MatSnackBarModule,
  MatToolbarModule,
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {RegistrationService} from './service/RegistrationService';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {OverlappingService} from './service/OverlappingService';
import {BookingService} from './service/BookingService';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HeaderBodyCoordinator} from './coordinator/HeaderBodyCoordinator';
import {CalendarBodyCellComponent} from './components/calendar-body-cell/calendar-body-cell.component';
import {CalendarHeaderComponent} from './components/calendar-header/calendar-header.component';
import {CalendarBodyComponent} from './components/calendar-body/calendar-body.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    RouterTestingModule,
    MatDialogModule,
    MatGridListModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    RouterTestingModule,
    MatDialogModule,
    MatGridListModule,
    MatChipsModule
  ],
  declarations: [

  ],
  providers: [
    OverlappingService,
    BookingService,
    RegistrationService,
    HeaderBodyCoordinator
    ],
  entryComponents: [

  ]
})
export class MaterialModule {}
