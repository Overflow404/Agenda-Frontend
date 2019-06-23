import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DateManager {

  private weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];


  static daysToSunday(lastDayOfMonth: Date) {
    if (lastDayOfMonth.getDay() !== 0) {
      return 7 - lastDayOfMonth.getDay();
    }
    return 0;
  }

  static firstDayOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  static lastDayOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  static nextMonth(date: Date) {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    return date;
  }

  static previousMonth(date: Date) {
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    return date;
  }

  static daysToMonday(firstDayOfMonth: Date) {
    if (firstDayOfMonth.getDay() !== 0) {
      return firstDayOfMonth.getDay() - 1;
    }
    return 0;
  }

  getWeekDayFromNumber(day: number) {
    return this.weekday[day];
  }

  getMonthName(month: number) {
    return this.months[month];
  }

}
