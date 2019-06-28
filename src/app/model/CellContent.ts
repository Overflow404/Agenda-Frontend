import {Booking} from './Booking';

export class CellContent {
  date: Date;
  enabled: boolean;
  chips: Booking[];


  constructor(date: Date, enabled: boolean, chips: Booking[]) {
    this.date = date;
    this.enabled = enabled;
    this.chips = chips;
  }

  addChip(booking: Booking) {
    this.chips.push(booking);
  }

}
