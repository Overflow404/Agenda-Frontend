export class Booking {

  subject: string;
  description: string;
  startDate: Date;
  endDate: Date;

  constructor(subject: string, description: string, startDate: Date, endDate: Date) {
    this.subject = subject;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }

}

