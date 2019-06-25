import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDialogContent, MatDialogActions, MatInputModule, MatSnackBar, MatSnackBarContainer} from '@angular/material';
import {CalendarBodyCellDialogComponent} from './calendar-body-cell-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {OverlappingService} from '../service/overlapping/OverlappingService';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {of} from 'rxjs';
import {Overlay} from '@angular/cdk/overlay';
import {Response} from '../service/Response';
import {BookingService} from '../service/booking/BookingService';

describe('CalendarBodyCellDialogComponent', () => {
  let component: CalendarBodyCellDialogComponent;
  let fixture: ComponentFixture<CalendarBodyCellDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatInputModule, BrowserAnimationsModule],
      declarations: [CalendarBodyCellDialogComponent,
        MatDialogContent,
        MatDialogActions, MatSnackBarContainer],
      providers: [OverlappingService, BookingService, HttpClient, HttpHandler, MatSnackBar, Overlay, MatSnackBar]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarBodyCellDialogComponent);
    component = fixture.componentInstance;
    spyOnProperty(component, 'date', 'get').and.returnValue(new Date(Date.now()));
    component.form.controls.subject.setValue('This is a subject');
    component.form.controls.subject.setValue('This is a description');
    component.form.controls.startTime.setValue('02:50');
    component.form.controls.endTime.setValue('02:54');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`form should be invalid cause incomplete`, () => {
    component.form.controls.subject.setValue(null);
    expect(component.form.valid).toBeFalsy();
  });

  it(`form should be invalid cause incomplete`, () => {
    component.form.controls.startTime.setValue(null);
    expect(component.form.valid).toBeFalsy();
  });

  it(`form should be invalid cause incomplete`, () => {
    component.form.controls.endTime.setValue(null);
    expect(component.form.valid).toBeFalsy();
  });

  it(`form should be valid with no description`, () => {
    component.form.controls.description.setValue(null);
    expect(component.form.valid).toBeTruthy();
  });

  it(`form should be valid with description`, () => {
    expect(component.form.valid).toBeTruthy();
  });

  it('form should be invalid cause hour > 24', () => {
    component.form.controls.startTime.setValue('25:50');
    expect(component.form.valid).toBeFalsy();

    component.form.controls.endTime.setValue('25:50');
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be invalid cause hour is not a number', () => {
    component.form.controls.startTime.setValue('AC:50');
    expect(component.form.valid).toBeFalsy();

    component.form.controls.endTime.setValue('AC:50');
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be invalid cause time has not :', () => {
    component.form.controls.startTime.setValue('0250');
    expect(component.form.valid).toBeFalsy();

    component.form.controls.endTime.setValue('0250');
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be invalid cause empty subject :', () => {
    component.form.controls.subject.setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be invalid cause empty start time :', () => {
    component.form.controls.startTime.setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be invalid cause empty end time :', () => {
    component.form.controls.endTime.setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('should appear error if time slot is busy', () => {
    const result = Response.failure(Response.BUSY_SLOT);

    spyOn(component, 'getOverlappingData').and.returnValue(of(result));
    spyOn(component, 'createSlot').and.returnValue({
      start: 1559131200000, /* Wed May 29 2019 12:00:00 UTC */
      end: 1559145600000 /* Wed May 29 2019 16:00:00 UTC */
    });

    component.onFormSubmit();

    expect(component.response.result).toBe('FAILURE');
  });

});


