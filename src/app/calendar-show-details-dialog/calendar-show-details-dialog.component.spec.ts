import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarShowDetailsDialogComponent } from './calendar-show-details-dialog.component';

describe('CalendarShowDetailsDialogComponent', () => {
  let component: CalendarShowDetailsDialogComponent;
  let fixture: ComponentFixture<CalendarShowDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarShowDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarShowDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
