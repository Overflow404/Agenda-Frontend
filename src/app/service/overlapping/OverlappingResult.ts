export interface OverlappingResult {
  result: string;
  content: string;
  failureReason?: string;
  success: 'SUCCESS';
  failure: 'FAILURE';
}
