import btoa from "../../btoa";
import fetch from "cross-fetch";
import { Fetch } from "../Fetch";
import { OAuthToken, OAuthTokenResponse } from "./OAuthToken";
import { profiles, Enviroment, API_URL } from "../../constants/enviroments";

const DEFAULT_HEADERS = {
  Accept: "application/json, application/x-www-form-urlencoded",
  "Content-Type": "application/x-www-form-urlencoded",
};

const DEFAULT_AUTH_URL: string = profiles[Enviroment.PRODUCTION][API_URL.CORE];

export interface OAuthOptions {
  clientId: string;
  clientSecret: string;
  username: string;
  password: string;
  authUrl?: string;
}

export class OAuthFetchObject {
  private username?: string;
  private password?: string;
  private clientId?: string;
  private clientSecret?: string;
  private authUrl: string;
  private token?: OAuthToken;

  constructor(opts?: OAuthOptions) {
    this.authUrl = (opts && opts.authUrl) || DEFAULT_AUTH_URL;
    if (opts) {
      this.clientId = opts.clientId;
      this.clientSecret = opts.clientSecret;
      this.username = opts.username;
      this.password = opts.password;
    }
  }

  public fetchToken(
    username: string,
    password: string,
  ): Promise<OAuthToken> {
    const body = `grant_type=password&username=${username}&password=${password}`;
    const auth = "Basic " + btoa(this.clientId + ":" + this.clientSecret);
    const headers = {
      ...DEFAULT_HEADERS,
      Authorization: auth,
    };
    return fetch(`${this.authUrl}/oauth2/token`, {
      method: "POST",
      body,
      headers,
    }).then((resp: any) => {
      if (resp.status === 200) {
        return resp
          .json()
          .then((t: OAuthTokenResponse) => new OAuthToken(t));
      }
      return { status: resp.status };
    });
  }

  public fetch(
    input: RequestInfo,
    init: RequestInit | undefined,
  ): Promise<Response> {
    return this.getToken().then ((token) => {
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
  return (input: RequestInfo, init: RequestInit | undefined ): Promise<Response> => {
    const instance = new OAuthFetchObject(opts);
    return instance.fetch(input,init);
  }
}
