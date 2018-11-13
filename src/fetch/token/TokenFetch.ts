import {Fetch} from "../Fetch";
import fetch from "cross-fetch"

export interface TokenFetchOptions {
  accessToken: string;
  tokenType?: string;
}

export class TokenFetch implements Fetch {
  private accessToken: string;
  private tokenType: string;
  constructor(opts: TokenFetchOptions) {
    this.accessToken = opts.accessToken;
    this.tokenType = opts.tokenType || "Bearer";
  }

  public fetch<T>(input: RequestInfo, init: RequestInit): Promise<T> {
    const headers: any = init.headers || {};

    headers.Authorization = `${this.tokenType} ${this.accessToken}`;
    init.headers = headers;
    return fetch(input, init).then((r: Response) => {
      return r.json();
    });
  }
}
