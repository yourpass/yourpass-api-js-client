export class HTTPError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(`${response.statusText || response.status}`);
    this.response = response;
  }
}
