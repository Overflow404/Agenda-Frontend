import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarTrailerComponent } from './calendar-trailer.component';
import {MaterialModule} from '../../configuration/material.module';

describe('CalendarTrailerComponent', () => {
  let component: CalendarTrailerComponent;
  let fixture: ComponentFixture<CalendarTrailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ CalendarTrailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
