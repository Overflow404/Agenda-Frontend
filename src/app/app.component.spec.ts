import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatCardModule,
  MatChip, MatChipsModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule,
  MatSnackBarContainer,
  MatToolbar
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarComponent} from './calendar/calendar.component';
import {CalendarHeaderComponent} from './calendar-header/calendar-header.component';
import {CalendarBodyComponent} from './calendar-body/calendar-body.component';
import {CalendarBodyCellComponent} from './calendar-body-cell/calendar-body-cell.component';
import {CalendarBodyCellDialogComponent} from './calendar-body-cell-dialog/calendar-body-cell-dialog.component';
import {CalendarTrailerComponent} from './calendar-trailer/calendar-trailer.component';
import {OverlappingService} from './service/OverlappingService';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {HeaderBodyCoordinator} from './coordinator/HeaderBodyCoordinator';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatDialogModule,
        MatCardModule,
        MatGridListModule,
        BrowserAnimationsModule,
        MatChipsModule],
      declarations: [
        AppComponent,
        CalendarComponent,
        CalendarHeaderComponent,
        CalendarBodyComponent,
        CalendarBodyCellComponent,
        CalendarBodyCellDialogComponent,
        CalendarTrailerComponent,
        MatSnackBarContainer,
        MatToolbar],
      providers: [
        OverlappingService,
        HttpClient,
        HttpHandler,
        HeaderBodyCoordinator]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
