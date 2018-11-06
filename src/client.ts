import btoa from "./btoa";
import {
  UUID,
  Pass,
  PassBase,
  List,
  AuthToken,
  Token,
  ImageReferenceMap,
} from "./models";
import fetch from "cross-fetch";

export enum Order {
  ASC = "asc",
  DESC = "desc",
}

// TODO - define query
export type Where = any;

export interface Query {
  [index: string]: {
    where?: Where;
    order?: Order;
    orderBy?: string;
    page?: "number";
    limit?: "number";
  };
}

const DEFAULT_HEADERS = {
  Accept: "application/json, application/x-www-form-urlencoded",
  "Content-Type": "application/x-www-form-urlencoded",
};

const DEFAULT_CORE_URL: string = "https://api.yourpass.eu";
const DEFAULT_AUTH_URL: string = "https://api.yourpass.eu";

export interface Options {
  clientId: string;
  clientSecret: string;
  username: string;
  password: string;
  authUrl?: string;
  coreUrl?: string;
}

function appendUrlParam(query: string, name: string, value: any): string {
  return `${query}${query === "" ? "" : "&"}${name}=${encodeURI(
    JSON.stringify(value),
  )}`;
}

export default class Client {
  private username?: string;
  private password?: string;
  private clientId?: string;
  private clientSecret?: string;
  private authUrl: string;
  private coreUrl: string;
  private token?: Token;

  public static createByAccessToken(
    access_token: string,
    expiration: Date,
  ): Client {
    const client = new Client();
    const expiresIn: number =
      (new Date().getTime() - expiration.getTime()) / 10000;

    client.token = new Token({
      access_token: access_token,
      expires_in: expiresIn,
      token_type: "Bearer",
    });
    return client;
  }

  constructor(opts?: Options) {
    this.authUrl = (opts && opts.authUrl) || DEFAULT_AUTH_URL;
    this.coreUrl = (opts && opts.coreUrl) || DEFAULT_CORE_URL;
    if (opts) {
      this.clientId = opts.clientId;
      this.clientSecret = opts.clientSecret;
      this.username = opts.username;
      this.password = opts.password;
    }
  }

  public fetchToken(username: string, password: string): Promise<AuthToken> {
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
        return resp.json();
      }
      return { status: resp.status };
    });
  }

  protected getToken(): Promise<AuthToken | undefined> {
    if (!this.token || (this.token && this.token.isExpired())) {
      if (this.username && this.password) {
        return this.fetchToken(this.username, this.password).then(
          (t: AuthToken) => {
            this.token = new Token(t);
            return t;
          },
        );
      }
      return Promise.resolve(this.token);
    }
    return Promise.resolve(this.token);
  }

  public request<T>(input: RequestInfo, init: RequestInit): Promise<T> {
    return this.getToken().then((token) => {
      const headers: any = init.headers || {};
      if (token) {
        headers["Authorization"] = `${token.token_type} ${token.access_token}`;
      }
      init.headers = headers;
      return fetch(input, init).then((r: Response) => {
        return r.json();
      });
    });
  }

  public list<T>(resource: string, query?: Query): Promise<List<T>> {
    let queryStr = ``;
    if (query) {
      Object.keys(query).forEach((key: string) => {
        queryStr = appendUrlParam(queryStr, key, query[key]);
      });
    }
    if (queryStr != "") queryStr = `?${queryStr}`;

    return this.request(`${this.coreUrl}/v1/${resource}${queryStr}`, {
      method: "GET",
    });
  }

  public get<T>(resource: string, id: UUID): Promise<T> {
    return this.request(`${this.coreUrl}/v1/${resource}/${id}`, {
      method: "GET",
    });
  }

  public create<T>(resource: string, object: any): Promise<T> {
    return this.request(`${this.coreUrl}/v1/${resource}`, {
      method: "POST",
      body: JSON.stringify(object),
    });
  }

  public update<T>(resource: string, id: UUID, object: any): Promise<T> {
    return this.request(`${this.coreUrl}/v1/${resource}/${id}`, {
      method: "PUT",
      body: JSON.stringify(object),
    });
  }

  public patch<T>(resource: string, id: UUID, object: any): Promise<T> {
    return this.request(`${this.coreUrl}/v1/${resource}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(object),
    });
  }

  public delete<T>(resource: string, id: UUID): Promise<T> {
    return this.request(`${this.coreUrl}/v1/${resource}/${id}`, {
      method: "DELETE",
    });
  }

  public passList(query?: Query): Promise<List<PassBase>> {
    return this.list<PassBase>("pass", query);
  }

  public passGet(id: UUID): Promise<Pass> {
    return this.get<Pass>("pass", id);
  }

  public passCreate(pass: {
    templateId: UUID;
    dynamicData?: any;
    dynamicImages?: ImageReferenceMap;
  }): Promise<Pass> {
    return this.create<Pass>("pass", pass);
  }

  public passPatch(
    id: UUID,
    pass: {
      templateId?: UUID;
      dynamicData?: any | null;
      dynamicImages?: ImageReferenceMap | null;
      voided?: boolean;
    },
  ): Promise<Pass> {
    return this.patch<Pass>("pass", id, pass);
  }

  /*
  public passUpdate(pass: {
    id: UUID;
    templateId: UUID;
    dynamicData?: any;
    dynamicImages?: ImageReferenceMap;
    voided?: boolean;
  }): Promise<Pass> {
    return this.update<Pass>("pass", pass.id, {
      templateId: pass.templateId,
      dynamicData: pass.dynamicData,
      dynamicImages: pass.dynamicImages,
      voided: pass.voided,
    });
  }
  */
  public passDelete(pass: UUID): Promise<Pass> {
    return this.delete<Pass>("pass", pass);
  }
}
