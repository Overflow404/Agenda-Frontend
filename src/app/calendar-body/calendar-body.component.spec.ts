import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CalendarBodyComponent} from './calendar-body.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule,
  MatSnackBar,
  MatSnackBarContainer,
  MatToolbar
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarComponent} from '../calendar/calendar.component';
import {CalendarHeaderComponent} from '../calendar-header/calendar-header.component';
import {CalendarBodyCellComponent} from '../calendar-body-cell/calendar-body-cell.component';
import {CalendarBodyCellDialogComponent} from '../calendar-body-cell-dialog/calendar-body-cell-dialog.component';
import {CalendarTrailerComponent} from '../calendar-trailer/calendar-trailer.component';
import {OverlappingService} from '../service/overlapping/OverlappingService';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {DataService} from '../data.service';
import {Overlay} from '@angular/cdk/overlay';
import {BookingService} from '../service/booking/BookingService';

describe('CalendarBodyComponent', () => {
  let component: CalendarBodyComponent;
  let fixture: ComponentFixture<CalendarBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatDialogModule,
        MatCardModule,
        MatGridListModule,
        BrowserAnimationsModule],
      declarations: [
        CalendarComponent,
        CalendarHeaderComponent,
        CalendarBodyComponent,
        CalendarBodyCellComponent,
        CalendarBodyCellDialogComponent,
        CalendarTrailerComponent,
        MatToolbar,
        MatSnackBarContainer],
      providers: [
        OverlappingService,
        BookingService,
        HttpClient,
        HttpHandler,
        DataService,
        MatSnackBar,
        Overlay]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
