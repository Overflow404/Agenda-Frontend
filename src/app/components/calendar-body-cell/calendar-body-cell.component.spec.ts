import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarBodyCellComponent } from './calendar-body-cell.component';
import {MaterialModule} from '../../material.module';

describe('CalendarBodyCellComponent', () => {
  let component: CalendarBodyCellComponent;
  let fixture: ComponentFixture<CalendarBodyCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [CalendarBodyCellComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarBodyCellComponent);
    component = fixture.componentInstance;
    spyOnProperty(component, 'date', 'get').and.returnValue(new Date(Date.now()));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
