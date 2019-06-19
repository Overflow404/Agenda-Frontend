import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { CalendarBodyComponent } from './calendar-body/calendar-body.component';
import { CalendarTrailerComponent } from './calendar-trailer/calendar-trailer.component';
import { CalendarBodyCellComponent } from './calendar-body-cell/calendar-body-cell.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material/';
import {DataService} from './data.service';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarBodyCellDialogComponent } from './calendar-body-cell-dialog/calendar-body-cell-dialog.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {HttpClientModule} from '@angular/common/http';
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
  ],
  entryComponents: [
    CalendarBodyCellDialogComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
