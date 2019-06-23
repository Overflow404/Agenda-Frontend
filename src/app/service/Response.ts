export class Response {

  public static SUCCESS = 'SUCCESS';
  public static FAILURE = 'FAILURE';
  public static BUSY_SLOT = 'This slot is busy!';
  public static START_AFTER_END = 'End time must be greater than start time!';

  private readonly overlappingResult: string;
  private readonly overlappingContent: string;
  private readonly overlappingFailureReason: string;

  private constructor(content: string, result: string, failureReason: string ) {
    this.overlappingResult = result;
    this.overlappingContent = failureReason;
    this.overlappingFailureReason = content;
  }

  static success(content: string) {
    return new Response(content, Response.SUCCESS, null);
  }

  static failure(reason: string) {
    return new Response(null, Response.FAILURE, reason);
  }


  get result(): string {
    return this.overlappingResult;
  }

  get content(): string {
    return this.overlappingContent;
  }

  get failureReason(): string {
    return this.overlappingFailureReason;
  }

}
