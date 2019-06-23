import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { CalendarBodyComponent } from './calendar-body/calendar-body.component';
import { CalendarTrailerComponent } from './calendar-trailer/calendar-trailer.component';
import { CalendarBodyCellComponent } from './calendar-body-cell/calendar-body-cell.component';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule,
  MatSlideToggleModule, MatSnackBar, MatSnackBarContainer, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material/';
import {DataService} from './data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarBodyCellDialogComponent } from './calendar-body-cell-dialog/calendar-body-cell-dialog.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {HttpClientModule} from '@angular/common/http';
import {OverlappingService} from './service/overlapping/OverlappingService';
import {Overlay} from '@angular/cdk/overlay';
import {BookingService} from './service/booking/BookingService';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    CalendarBodyComponent,
    CalendarTrailerComponent,
    CalendarBodyCellComponent,
    CalendarBodyCellDialogComponent
  ],
  imports: [
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
  ],
  entryComponents: [
    CalendarBodyCellDialogComponent

  ],
  providers: [DataService, OverlappingService, BookingService, MatSnackBar, Overlay,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
