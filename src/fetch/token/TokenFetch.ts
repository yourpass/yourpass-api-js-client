import { Fetch } from "../Fetch";
import fetch from "cross-fetch";

export interface TokenFetchOptions {
  accessToken: string;
  tokenType?: string;
}

export function TokenFetch(opts: TokenFetchOptions): Fetch {
  const accessToken = opts.accessToken;
  const tokenType = opts.tokenType || "Bearer";
  return (input: RequestInfo, init: RequestInit | undefined ): Promise<Response> => {
    const headers: any = init && init.headers || {};
    const newInit: RequestInit = init || {};
    headers.Authorization = `${tokenType} ${accessToken}`;
    newInit.headers = headers;
    return fetch(input, newInit);
  };
}
