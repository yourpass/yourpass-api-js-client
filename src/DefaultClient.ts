import { Fetch } from "./fetch/index";
import {
  ClientOptions,
  Query,
  List,
  UUID,
  Viewer,
  ViewerOptions,
} from "./models";
import { Enviroment, API_URL, profiles } from "./constants/enviroments";
function appendUrlParam(query: string, name: string, value: any): string {
  return `${query}${query === "" ? "" : "&"}${name}=${encodeURI(
    JSON.stringify(value),
  )}`;
}

export default class DefaultClient implements ClientOptions {
  public fetch: Fetch;
  public enviroment: Enviroment;

  constructor(opts: ClientOptions) {
    this.fetch = opts.fetch;
    this.enviroment = opts.enviroment || Enviroment.PRODUCTION;
  }

  public getURL(api: API_URL) {
    return profiles[this.enviroment][api];
  }

  public request<T>(input: RequestInfo, init: RequestInit): Promise<T> {
    return this.fetch(input, init).then((r: Response) => {
      return r.json();
    });
  }

  public list<T>(
    api: API_URL,
    resource: string,
    query?: Query,
  ): Promise<List<T>> {
    let queryStr = ``;
    if (query) {
      Object.keys(query).forEach((key: string) => {
        queryStr = appendUrlParam(queryStr, key, query[key]);
      });
    }
    if (queryStr !== "") {
      queryStr = `?${queryStr}`;
    }

    return this.request(`${this.getURL(api)}/v1/${resource}${queryStr}`, {
      method: "GET",
    });
  }

  public get<T>(api: API_URL, resource: string, id: UUID): Promise<T> {
    return this.request(`${this.getURL(api)}/v1/${resource}/${id}`, {
      method: "GET",
    });
  }

  public create<T>(api: API_URL, resource: string, object: any): Promise<T> {
    return this.request(`${this.getURL(api)}/v1/${resource}`, {
      method: "POST",
      body: JSON.stringify(object),
    });
  }

  public update<T>(
    api: API_URL,
    resource: string,
    id: UUID,
    object: any,
  ): Promise<T> {
    return this.request(`${this.getURL(api)}/v1/${resource}/${id}`, {
      method: "PUT",
      body: JSON.stringify(object),
    });
  }

  public patch<T>(
    api: API_URL,
    resource: string,
    id: UUID,
    object: any,
  ): Promise<T> {
    return this.request(`${this.getURL(api)}/v1/${resource}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(object),
    });
  }

  public delete<T>(api: API_URL, resource: string, id: UUID): Promise<T> {
    return this.request(`${this.getURL(api)}/v1/${resource}/${id}`, {
      method: "DELETE",
    });
  }

  public getViewer(): Promise<Viewer> {
    return this.get<ViewerOptions>(API_URL.CORE, "user", "me").then(
      (resp: ViewerOptions) => {
        return new Viewer(resp);
      },
    );
  }
}
