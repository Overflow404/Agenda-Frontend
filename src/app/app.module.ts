import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CalendarComponent} from './calendar/calendar.component';
import {CalendarHeaderComponent} from './calendar-header/calendar-header.component';
import {CalendarBodyComponent} from './calendar-body/calendar-body.component';
import {CalendarTrailerComponent} from './calendar-trailer/calendar-trailer.component';
import {CalendarBodyCellComponent} from './calendar-body-cell/calendar-body-cell.component';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule, MatChipList, MatChipsModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule, MatListModule,
  MatSlideToggleModule, MatSnackBar, MatSnackBarContainer, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material/';
import {HeaderBodyCoordinator} from './coordinator/HeaderBodyCoordinator';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarBodyCellDialogComponent} from './calendar-body-cell-dialog/calendar-body-cell-dialog.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {HttpClientModule} from '@angular/common/http';
import {OverlappingService} from './service/OverlappingService';
import {Overlay} from '@angular/cdk/overlay';
import {BookingService} from './service/BookingService';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CalendarShowDetailsDialogComponent} from './calendar-show-details-dialog/calendar-show-details-dialog.component';
import {RouterModule} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RegistrationService} from './service/RegistrationService';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    CalendarBodyComponent,
    CalendarTrailerComponent,
    CalendarBodyCellComponent,
    CalendarBodyCellDialogComponent,
    CalendarShowDetailsDialogComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      {path: 'register', component: RegistrationComponent},
      {path: 'login', component: LoginComponent}]),
    BrowserModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    NgxMaterialTimepickerModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatChipsModule,
    ScrollingModule,
    MatListModule,
    RouterModule,

  ],
  entryComponents: [
    CalendarBodyCellDialogComponent, CalendarShowDetailsDialogComponent

  ],
  providers: [HeaderBodyCoordinator, OverlappingService, MatSnackBar, Overlay, RegistrationService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}, BookingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
