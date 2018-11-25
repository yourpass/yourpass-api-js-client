export interface OAuthTokenResponse {
    access_token?: string;
    expires_in?: number;
    token_type?: string;
    error?: string;
    error_description?: string;
  }
  
  
  export interface OAuthTokenOptions {
     accessToken: string;
     expiresIn: number;
     tokenType: string;
  }

  
  const REFRESH_INTERVAL = 120 * 1000;
  
  export class OAuthToken {
    public accessToken: string;
    public expiresIn: number;
    public tokenType: string;
    private created: number;
  
    constructor(opts: OAuthTokenOptions) {
      this.accessToken = opts.accessToken;
      this.expiresIn = opts.expiresIn;
      this.tokenType = opts.tokenType;
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
  