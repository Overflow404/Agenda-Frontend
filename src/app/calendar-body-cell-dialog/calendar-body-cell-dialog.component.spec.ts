import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogContent, MatDialogActions, MatInputModule} from '@angular/material';
import { CalendarBodyCellDialogComponent } from './calendar-body-cell-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {OverlappingService} from '../service/overlapping/OverlappingService';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TimeValidator} from '../validator/TimeValidator';

describe('CalendarBodyCellDialogComponent', () => {
  let component: CalendarBodyCellDialogComponent;
  let fixture: ComponentFixture<CalendarBodyCellDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatInputModule, BrowserAnimationsModule],
      declarations: [ CalendarBodyCellDialogComponent,
        MatDialogContent,
        MatDialogActions],
      providers: [OverlappingService, HttpClient, HttpHandler, TimeValidator]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarBodyCellDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`form should be invalid cause incomplete`, () => {
    component.bookingForm.controls.subject.setValue('This is a subject');
    expect(component.bookingForm.valid).toBeFalsy();
  });

  it(`form should be invalid cause incomplete`, () => {
    component.bookingForm.controls.startTime.setValue('02:50');
    expect(component.bookingForm.valid).toBeFalsy();
  });

  it(`form should be invalid cause incomplete`, () => {
    component.bookingForm.controls.endTime.setValue('02:50');
    expect(component.bookingForm.valid).toBeFalsy();
  });

  it(`form should be valid`, () => {
    component.bookingForm.controls.subject.setValue('This is a subject');
    component.bookingForm.controls.startTime.setValue('02:50');
    component.bookingForm.controls.endTime.setValue('02:54');
    expect(component.bookingForm.valid).toBeTruthy();
  });

  it(`form should be valid`, () => {
    component.bookingForm.controls.subject.setValue('This is a subject');
    component.bookingForm.controls.subject.setValue('This is a description');
    component.bookingForm.controls.startTime.setValue('02:50');
    component.bookingForm.controls.endTime.setValue('02:54');
    expect(component.bookingForm.valid).toBeTruthy();
  });

  it('form should be invalid cause hour > 24', () => {
    component.bookingForm.controls.subject.setValue('This is a subject');
    component.bookingForm.controls.startTime.setValue('25:50');
    component.bookingForm.controls.endTime.setValue('02:54');
    expect(component.bookingForm.valid).toBeFalsy();
  });

  it('form should be invalid cause hour is not a number', ()  => {
    component.bookingForm.controls.subject.setValue('This is a subject');
    component.bookingForm.controls.startTime.setValue('AC:50');
    component.bookingForm.controls.endTime.setValue('02:54');
    expect(component.bookingForm.valid).toBeFalsy();
  });

  it('form should be invalid cause time has not :', () => {
    component.bookingForm.controls.subject.setValue('This is a subject');
    component.bookingForm.controls.startTime.setValue('02:50');
    component.bookingForm.controls.endTime.setValue('0290');
    expect(component.bookingForm.valid).toBeFalsy();
  });

  it('form should be invalid cause empty subject :', () => {
    component.bookingForm.controls.subject.setValue('');
    component.bookingForm.controls.startTime.setValue('02:50');
    component.bookingForm.controls.endTime.setValue('05:40');
    expect(component.bookingForm.valid).toBeFalsy();
  });

});


