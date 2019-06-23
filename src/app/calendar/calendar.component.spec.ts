import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CalendarComponent} from './calendar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule, MatSnackBar, MatSnackBarContainer,
  MatToolbar
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OverlappingService} from '../service/overlapping/OverlappingService';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {CalendarHeaderComponent} from '../calendar-header/calendar-header.component';
import {CalendarBodyComponent} from '../calendar-body/calendar-body.component';
import {CalendarBodyCellComponent} from '../calendar-body-cell/calendar-body-cell.component';
import {CalendarBodyCellDialogComponent} from '../calendar-body-cell-dialog/calendar-body-cell-dialog.component';
import {CalendarTrailerComponent} from '../calendar-trailer/calendar-trailer.component';
import {DataService} from '../data.service';
import {Overlay} from '@angular/cdk/overlay';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

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
        HttpClient,
        HttpHandler,
        DataService,
        MatSnackBar,
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
