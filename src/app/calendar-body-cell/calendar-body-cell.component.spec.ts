import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarBodyCellComponent } from './calendar-body-cell.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule, MatDialogModule, MatGridListModule, MatInputModule, MatToolbar} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarComponent} from '../calendar/calendar.component';
import {CalendarHeaderComponent} from '../calendar-header/calendar-header.component';
import {CalendarBodyComponent} from '../calendar-body/calendar-body.component';
import {CalendarBodyCellDialogComponent} from '../calendar-body-cell-dialog/calendar-body-cell-dialog.component';
import {CalendarTrailerComponent} from '../calendar-trailer/calendar-trailer.component';
import {OverlappingService} from '../service/overlapping/OverlappingService';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {DataService} from '../data.service';

describe('CalendarBodyCellComponent', () => {
  let component: CalendarBodyCellComponent;
  let fixture: ComponentFixture<CalendarBodyCellComponent>;

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
        MatToolbar],
      providers: [
        OverlappingService,
        HttpClient,
        HttpHandler,
        DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarBodyCellComponent);
    component = fixture.componentInstance;
    spyOnProperty(component, 'date', 'get').and.returnValue(new Date(Date.now()));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
