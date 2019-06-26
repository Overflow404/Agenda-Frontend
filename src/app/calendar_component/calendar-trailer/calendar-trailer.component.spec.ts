import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarTrailerComponent } from './calendar-trailer.component';

describe('CalendarTrailerComponent', () => {
  let component: CalendarTrailerComponent;
  let fixture: ComponentFixture<CalendarTrailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
