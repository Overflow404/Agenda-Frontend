export class OverlappingResult {

  overlap: boolean;
  startDate: string;
  endDate: string;

  constructor(overlap: boolean, startDate: string, endDate: string) {
    this.overlap = overlap;
    this.startDate = startDate;
    this.endDate = endDate;
  }


}
