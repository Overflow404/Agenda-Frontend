import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule,
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {RegistrationService} from './service/RegistrationService';
import {HttpClientModule} from '@angular/common/http';
import {OverlappingService} from './service/OverlappingService';
import {BookingService} from './service/BookingService';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {CalendarHeaderToBodyCoordinator} from './coordinator/CalendarHeaderToBodyCoordinator';

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
    CalendarHeaderToBodyCoordinator
    ],
  entryComponents: [

  ]
})
export class MaterialModule {}
