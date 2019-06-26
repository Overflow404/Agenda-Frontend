import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CalendarHeaderComponent} from './calendar-header.component';
import {MatSnackBar, MatSnackBarContainer, MatToolbar} from '@angular/material';
import {HeaderBodyCoordinator} from '../coordinator/HeaderBodyCoordinator';
import {Overlay} from '@angular/cdk/overlay';

describe('CalendarHeaderComponent', () => {
  let component: CalendarHeaderComponent;
  let fixture: ComponentFixture<CalendarHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarHeaderComponent, MatToolbar, MatSnackBarContainer],
      providers: [HeaderBodyCoordinator, MatSnackBar, Overlay]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
