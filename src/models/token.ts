export interface AuthToken {
  access_token: string;
  expires_in: number;
  token_type: string;
}

const REFRESH_INTERVAL = 120 * 1000;

export class Token implements AuthToken {
  public access_token: string;
  public expires_in: number;
  public token_type: string;
  private created: number;

  constructor(opts: AuthToken) {
    this.access_token = opts.access_token;
    this.expires_in = opts.expires_in;
    this.token_type = opts.token_type;
    this.created = new Date().getTime();
  }

  public isExpired() {
    const currentTime = new Date().getTime();
    const expirationTime =
      this.expires_in * 1000 + this.created - REFRESH_INTERVAL;
    return !!(currentTime > expirationTime);
  }

  public getToken() {
    return this.access_token;
  }
}
