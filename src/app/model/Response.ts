export class Response {

  public static SUCCESS = 'SUCCESS';
  public static FAILURE = 'FAILURE';
  public static BUSY_SLOT = 'This slot is busy!';
  public static START_AFTER_END = 'End time must be greater than start time!';

  private readonly res: string;
  private readonly cont: string;
  private readonly fail: string;

  private constructor(content: string, result: string, failureReason: string ) {
    this.res = result;
    this.cont = failureReason;
    this.fail = content;
  }

  static success(content: string) {
    return new Response(content, Response.SUCCESS, null);
  }

  static failure(reason: string) {
    return new Response(null, Response.FAILURE, reason);
  }


  get result(): string {
    return this.res;
  }

  get content(): string {
    return this.cont;
  }

  get failureReason(): string {
    return this.fail;
  }

}
