import btoa from "../../btoa";
import fetch from "cross-fetch";
import {Fetch} from "../Fetch";

import { CredentialsToken, AuthTokenResponse } from "./CredentialsToken"

const DEFAULT_HEADERS = {
  Accept: "application/json, application/x-www-form-urlencoded",
  "Content-Type": "application/x-www-form-urlencoded",
};

const DEFAULT_AUTH_URL: string = "https://api.yourpass.eu";

export interface CredentialsClientOptions {
  clientId: string;
  clientSecret: string;
  username: string;
  password: string;
  authUrl?: string;
}

export class CredentialsClient implements Fetch {
  private username?: string;
  private password?: string;
  private clientId?: string;
  private clientSecret?: string;
  private authUrl: string;
  private token?: CredentialsToken;

  constructor(opts?: CredentialsClientOptions) {
    this.authUrl = (opts && opts.authUrl) || DEFAULT_AUTH_URL;
    if (opts) {
      this.clientId = opts.clientId;
      this.clientSecret = opts.clientSecret;
      this.username = opts.username;
      this.password = opts.password;
    }
  }

  public fetchToken(username: string, password: string): Promise<CredentialsToken> {
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
        return resp.json().then((t: AuthTokenResponse) => new CredentialsToken(t));
      }
      return { status: resp.status };
    });
  }

  public fetch<T>(input: RequestInfo, init: RequestInit): Promise<T> {
    return this.getToken().then((token) => {
      const headers: any = init.headers || {};
      if (token) {
        headers.Authorization = `${token.tokenType} ${token.accessToken}`;
      }
      init.headers = headers;
      return fetch(input, init).then((r: Response) => {
        return r.json();
      });
    });
  }

  protected getToken(): Promise<CredentialsToken | undefined> {
    if (!this.token || (this.token && this.token.isExpired())) {
      if (this.username && this.password) {
        return this.fetchToken(this.username, this.password);
      }
      return Promise.resolve(this.token);
    }
    return Promise.resolve(this.token);
  }
}

