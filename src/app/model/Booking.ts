export class Booking {

  subject: string;
  description: string;
  start: number;
  end: number;

  constructor(subject: string, description: string, startDate: number, endDate: number) {
    this.subject = subject;
    this.description = description;
    this.start = startDate;
    this.end = endDate;
  }

}
