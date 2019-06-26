import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CalendarComponent} from './calendar.component';
import {MaterialModule} from '../../material.module';
import {CalendarHeaderComponent} from '../calendar-header/calendar-header.component';
import {CalendarBodyComponent} from '../calendar-body/calendar-body.component';
import {CalendarBodyCellComponent} from '../calendar-body-cell/calendar-body-cell.component';
import {CalendarTrailerComponent} from '../calendar-trailer/calendar-trailer.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [
        CalendarComponent,
        CalendarHeaderComponent,
        CalendarBodyComponent,
        CalendarBodyCellComponent,
        CalendarTrailerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
