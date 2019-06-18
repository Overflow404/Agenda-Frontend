import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarBodyCellComponent } from './calendar-body-cell.component';

describe('CalendarBodyCellComponent', () => {
  let component: CalendarBodyCellComponent;
  let fixture: ComponentFixture<CalendarBodyCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarBodyCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarBodyCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
