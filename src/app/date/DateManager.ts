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
    switch (firstDayOfMonth.getDay()) {
      case 0:
        return 6;
      case 1:
        return 0;
      default:
        return firstDayOfMonth.getDay() - 1;
    }
  }

  static isADayOfCurrentMonth(date: Date, day: number) {
    return day > 0 && day <= DateManager.lastDayOfMonth(date).getDate();
  }

  static extractTime(date: Date) {
    let hour;
    let minutes;

    if (date.getHours() < 10) {
      hour = '0' + date.getHours();
    } else {
      hour = date.getHours();
    }

    if (date.getMinutes() < 10) {
      minutes = '0' + date.getMinutes();
    } else {
      minutes = date.getMinutes();
    }

    return hour + ':' + minutes;
  }

  getWeekDayFromNumber(day: number) {
    return this.weekday[day];
  }

  getMonthName(month: number) {
    return this.months[month];
  }

}
