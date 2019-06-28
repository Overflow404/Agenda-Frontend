import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CalendarBodyComponent} from './calendar-body.component';
import {MaterialModule} from '../../configuration/material.module';
import {CalendarBodyCellComponent} from '../calendar-body-cell/calendar-body-cell.component';

describe('CalendarBodyComponent', () => {
  let component: CalendarBodyComponent;
  let fixture: ComponentFixture<CalendarBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [
        CalendarBodyComponent,
        CalendarBodyCellComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
