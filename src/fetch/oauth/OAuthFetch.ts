import btoa from "../../helpers/btoa";
import fetch from "cross-fetch";
import { Fetch } from "../Fetch";
import { OAuthToken, OAuthTokenResponse } from "./OAuthToken";
import { HTTPError } from "../../helpers/httpError";

const DEFAULT_HEADERS = {
  Accept: "application/json, application/x-www-form-urlencoded",
  "Content-Type": "application/x-www-form-urlencoded",
};

export interface OAuthOptions {
  clientId: string;
  clientSecret: string;
  username: string;
  password: string;
  url: string;
}

export class OAuthFetchObject {
  private username?: string;
  private password?: string;
  private clientId?: string;
  private clientSecret?: string;
  private url: string;
  private token?: OAuthToken;

  constructor(opts: OAuthOptions) {
    this.url = opts.url;
    this.clientId = opts.clientId;
    this.clientSecret = opts.clientSecret;
    this.username = opts.username;
    this.password = opts.password;
  }

  public fetchToken(username: string, password: string): Promise<OAuthToken> {
    
    const params: any = {
      grant_type: "password",
      username,
      password,
    };

    const body = Object.keys(params)
      .map((key) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
      })
      .join("&");

    const auth = "Basic " + btoa(this.clientId + ":" + this.clientSecret);
    const headers = {
      ...DEFAULT_HEADERS,
      Authorization: auth,
    };
    return fetch(`${this.url}/oauth2/token`, {
      method: "POST",
      body,
      headers,
    }).then((resp: any) => {
      if (resp.status === 200) {
        return resp.json().then((json: OAuthTokenResponse) => {
          if (json.access_token && json.expires_in && json.token_type) {
            return new OAuthToken({
              accessToken: json.access_token,
              expiresIn: json.expires_in,
              tokenType: json.token_type,
            });
          }
          return Promise.reject(new Error(json.error));
        });
      }
      return Promise.reject(new HTTPError(resp));
    });
  }

  public fetch(
    input: RequestInfo,
    init: RequestInit | undefined,
  ): Promise<Response> {
    return this.getToken().then((token) => {
      const headers: any = (init && init.headers) || {};
      const newInit = init || {};
      if (token) {
        headers.Authorization = `${token.tokenType} ${token.accessToken}`;
      }
      newInit.headers = headers;
      return fetch(input, init);
    });
  }

  protected getToken(): Promise<OAuthToken | undefined> {
    if (!this.token || (this.token && this.token.isExpired())) {
      if (this.username && this.password) {
        return this.fetchToken(this.username, this.password);
      }
      return Promise.resolve(this.token);
    }
    return Promise.resolve(this.token);
  }
}

export function createOAuthFetch(opts: OAuthOptions): Fetch {
  return (
    input: RequestInfo,
    init: RequestInit | undefined,
  ): Promise<Response> => {
    const instance = new OAuthFetchObject(opts);
    return instance.fetch(input, init);
  };
}
