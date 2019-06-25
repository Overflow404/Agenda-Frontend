import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CalendarComponent} from './calendar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule,
  MatSnackBar,
  MatSnackBarContainer, MatSnackBarModule,
  MatToolbar,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OverlappingService} from '../service/OverlappingService';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {CalendarHeaderComponent} from '../calendar-header/calendar-header.component';
import {CalendarBodyComponent} from '../calendar-body/calendar-body.component';
import {CalendarBodyCellComponent} from '../calendar-body-cell/calendar-body-cell.component';
import {CalendarBodyCellDialogComponent} from '../calendar-body-cell-dialog/calendar-body-cell-dialog.component';
import {CalendarTrailerComponent} from '../calendar-trailer/calendar-trailer.component';
import {HeaderBodyCoordinator} from '../coordinator/HeaderBodyCoordinator';
import {Overlay} from '@angular/cdk/overlay';
import {BookingService} from '../service/BookingService';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatDialogModule,
        MatCardModule,
        MatGridListModule,
        MatToolbarModule,
        MatChipsModule,
        MatSnackBarModule],
      declarations: [
        CalendarComponent,
        CalendarHeaderComponent,
        CalendarBodyComponent,
        CalendarBodyCellComponent,
        CalendarBodyCellDialogComponent,
        CalendarTrailerComponent],
      providers: [
        OverlappingService,
        HttpClient,
        HttpHandler,
        HeaderBodyCoordinator,
        BookingService,
        Overlay]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
