import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarBodyCellDialogComponent } from './calendar-body-cell-dialog.component';

describe('CalendarBodyCellDialogComponent', () => {
  let component: CalendarBodyCellDialogComponent;
  let fixture: ComponentFixture<CalendarBodyCellDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarBodyCellDialogComponent ]
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
});
