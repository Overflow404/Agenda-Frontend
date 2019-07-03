import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {CalendarHeaderComponent} from './components/calendar-header/calendar-header.component';
import {CalendarBodyComponent} from './components/calendar-body/calendar-body.component';
import {CalendarTrailerComponent} from './components/calendar-trailer/calendar-trailer.component';
import {CalendarBodyCellComponent} from './components/calendar-body-cell/calendar-body-cell.component';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS, MatBadgeModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule, MatListModule,
  MatSlideToggleModule, MatSnackBar, MatSnackBarModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material/';
import {CalendarHeaderToBodyCoordinator} from './coordinator/CalendarHeaderToBodyCoordinator';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarBodyCellDialogComponent} from './components/calendar-body-cell-dialog/calendar-body-cell-dialog.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {HttpClientModule} from '@angular/common/http';
import {OverlappingService} from './service/OverlappingService';
import {Overlay} from '@angular/cdk/overlay';
import {BookingService} from './service/BookingService';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CalendarShowDetailsDialogComponent} from './components/calendar-show-details-dialog/calendar-show-details-dialog.component';
import {RouterModule} from '@angular/router';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {RegistrationService} from './service/RegistrationService';
import {LoginService} from './service/LoginService';
import {JWT_OPTIONS, JwtHelperService} from '@auth0/angular-jwt';
import {ToolbarService} from './service/ToolbarService';
import { PendingRequestsComponent } from './pending-requests/pending-requests.component';
import {PendingService} from './service/PendingService';

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
    HomeComponent,
    LoginComponent,
    HomeComponent,
    PendingRequestsComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'calendar', component: CalendarComponent},
      {path: 'register', component: RegistrationComponent},
      {path: 'pending', component: PendingRequestsComponent},
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
    MatCheckboxModule,
    MatBadgeModule,
    MatTooltipModule,

  ],
  entryComponents: [
    CalendarBodyCellDialogComponent, CalendarShowDetailsDialogComponent

  ],
  providers: [CalendarHeaderToBodyCoordinator, OverlappingService, MatSnackBar, Overlay, RegistrationService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}, BookingService, LoginService, JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, ToolbarService, PendingService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
