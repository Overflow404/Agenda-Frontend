import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarShowDetailsDialogComponent } from './calendar-show-details-dialog.component';
import {MaterialModule} from '../../material.module';

describe('CalendarShowDetailsDialogComponent', () => {
  let component: CalendarShowDetailsDialogComponent;
  let fixture: ComponentFixture<CalendarShowDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ CalendarShowDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarShowDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
