import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DateManager {

  weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  getFirstDayOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  getLastDayOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  nextMonth(date: Date) {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    return date;
  }

  previousMonth(date: Date) {
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    return date;
  }

  getWeekdayNameByDay(day: number) {
    return this.weekday[day];
  }

  daysToMonday(firstDayOfMonth: Date) {
    if (firstDayOfMonth.getDay() !== 1) {
      return firstDayOfMonth.getDay() - 1;
    }
    return 0;
  }

  daysToSunday(lastDayOfMonth: Date) {
    if (lastDayOfMonth.getDay() !== 0) {
      return 7 - lastDayOfMonth.getDay();
    }
    return 0;
  }

  getMonthName(month: number) {
    return this.months[month];
  }

  mergeDatesToJSON(fullStartDate: Date, fullEndDate: Date) {
    const startInterval = JSON.stringify(fullStartDate);
    const endInterval = JSON.stringify(fullEndDate);
    return ((startInterval + endInterval).replace(/['"]+/g, ''));

  }
}
