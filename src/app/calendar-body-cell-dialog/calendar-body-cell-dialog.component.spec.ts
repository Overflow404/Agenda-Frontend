import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDialogContent, MatDialogActions, MatInputModule} from '@angular/material';
import {CalendarBodyCellDialogComponent} from './calendar-body-cell-dialog.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {OverlappingService} from '../service/overlapping/OverlappingService';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {of} from 'rxjs';

describe('CalendarBodyCellDialogComponent', () => {
  let component: CalendarBodyCellDialogComponent;
  let fixture: ComponentFixture<CalendarBodyCellDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatInputModule, BrowserAnimationsModule],
      declarations: [CalendarBodyCellDialogComponent,
        MatDialogContent,
        MatDialogActions],
      providers: [OverlappingService, HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarBodyCellDialogComponent);
    component = fixture.componentInstance;
    spyOnProperty(component, 'date', 'get').and.returnValue(new Date(Date.now()));
    spyOnProperty(component, 'regex', 'get').and.returnValue('^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$');
    spyOnProperty(component, 'form', 'get').and.returnValue(
      new FormGroup({
        subject: new FormControl('', Validators.required),

        description: new FormControl(),
        startTime: new FormControl('', [Validators.required, Validators.pattern(component.regex)]),
        endTime: new FormControl('', [Validators.required, Validators.pattern(component.regex)])
      })
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`form should be invalid cause incomplete`, () => {
    component.form.controls.subject.setValue('This is a subject');
    expect(component.form.valid).toBeFalsy();
  });

  it(`form should be invalid cause incomplete`, () => {
    component.form.controls.startTime.setValue('02:50');
    expect(component.form.valid).toBeFalsy();
  });

  it(`form should be invalid cause incomplete`, () => {
    component.form.controls.endTime.setValue('02:50');
    expect(component.form.valid).toBeFalsy();
  });

  it(`form should be valid with no description`, () => {
    component.form.controls.subject.setValue('This is a subject');
    component.form.controls.startTime.setValue('02:50');
    component.form.controls.endTime.setValue('02:54');
    expect(component.form.valid).toBeTruthy();
  });

  it(`form should be valid with description`, () => {
    component.form.controls.subject.setValue('This is a subject');
    component.form.controls.subject.setValue('This is a description');
    component.form.controls.startTime.setValue('02:50');
    component.form.controls.endTime.setValue('02:54');
    expect(component.form.valid).toBeTruthy();
  });

  it('form should be invalid cause hour > 24', () => {
    component.form.controls.subject.setValue('This is a subject');
    component.form.controls.startTime.setValue('25:50');
    component.form.controls.endTime.setValue('02:54');
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be invalid cause hour is not a number', () => {
    component.form.controls.subject.setValue('This is a subject');
    component.form.controls.startTime.setValue('AC:50');
    component.form.controls.endTime.setValue('02:54');
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be invalid cause time has not :', () => {
    component.form.controls.subject.setValue('This is a subject');
    component.form.controls.startTime.setValue('02:50');
    component.form.controls.endTime.setValue('0290');
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be invalid cause empty subject :', () => {
    component.form.controls.subject.setValue('');
    component.form.controls.startTime.setValue('02:50');
    component.form.controls.endTime.setValue('05:40');
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be invalid cause empty start time :', () => {
    component.form.controls.subject.setValue('subject');
    component.form.controls.startTime.setValue('');
    component.form.controls.endTime.setValue('05:40');
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be invalid cause empty end time :', () => {
    component.form.controls.subject.setValue('subject');
    component.form.controls.startTime.setValue('14:00');
    component.form.controls.endTime.setValue('');
    expect(component.form.valid).toBeFalsy();
  });


  it('should appear error if time slot is busy', () => {
    spyOn(component, 'getData').and.returnValue(of({
      failure: 'FAILURE',
      success: 'SUCCESS',
      result: 'FAILURE',
      content: null,
      failureReason: 'This slot is busy!'
    }));

    spyOn(component, 'createSlot').and.returnValue({
      start: 1559131200000, /* Wed May 29 2019 12:00:00 UTC */
      end: 1559145600000 /* Wed May 29 2019 16:00:00 UTC */
    });

    component.onFormSubmit();

    expect(component.result.result).toBe('FAILURE');
  });

  it('should appear error if start time is greater than end time', () => {
    spyOn(component, 'getData').and.returnValue(of({
      failure: 'FAILURE',
      success: 'SUCCESS',
      result: 'FAILURE',
      content: null,
      failureReason: 'End time must be greater than start time!'
    }));

    spyOn(component, 'createSlot').and.returnValue({
      start: 1559145600000 , /* Wed May 29 2019 16:00:00 UTC */
      end: 1559131200000 /* Wed May 29 2019 12:00:00 UTC */
    });

    component.onFormSubmit();

    expect(component.result.result).toBe('FAILURE');
  });

});


