import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { CalendarBodyComponent } from './calendar-body/calendar-body.component';
import { CalendarTrailerComponent } from './calendar-trailer/calendar-trailer.component';
import { CalendarBodyCellComponent } from './calendar-body-cell/calendar-body-cell.component';
import {MatButtonModule, MatCardModule, MatGridListModule, MatInputModule, MatToolbarModule} from '@angular/material/';
import {DataService} from './data.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    CalendarBodyComponent,
    CalendarTrailerComponent,
    CalendarBodyCellComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
