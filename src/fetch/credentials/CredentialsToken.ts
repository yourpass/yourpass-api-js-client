export interface AuthTokenResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
  }
  
  export interface AuthToken {
     accessToken: string;
     expiresIn: number;
     tokenType: string;
  }
  
  const REFRESH_INTERVAL = 120 * 1000;
  
  export class CredentialsToken implements AuthToken {
    public accessToken: string;
    public expiresIn: number;
    public tokenType: string;
    private created: number;
  
    constructor(opts: AuthTokenResponse) {
      this.accessToken = opts.access_token;
      this.expiresIn = opts.expires_in;
      this.tokenType = opts.token_type;
      this.created = new Date().getTime();
    }
  
    public isExpired() {
      const currentTime = new Date().getTime();
      const expirationTime =
        this.expiresIn * 1000 + this.created - REFRESH_INTERVAL;
      return !!(currentTime > expirationTime);
    }
  
    public getToken() {
      return this.accessToken;
    }
  }
  