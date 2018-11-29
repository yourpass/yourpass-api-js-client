export class HTTPError extends Error {
  public statusCode: number;
  public statusText: string;

  constructor(response: Response) {
    super(`Status: ${response.status} StatusText:${response.statusText}`);
    this.statusCode = response.status;
    this.statusText = response.statusText;
  }
}
